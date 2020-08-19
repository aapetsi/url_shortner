import request from 'supertest'
import Url from '../../models/Url.model'
import server from '../../server'
import {ITokenData} from '../../types'
import User from '../../models/User.model'

const api = '/api/url/createShortLink'
const registerApi = '/api/auth/register'

let token: ITokenData

const clearDB = async () => {
  await Url.deleteMany({})
  await User.deleteMany({})
}

beforeAll(async () => {
  try {
    await clearDB()
    const res = await request(server).post(registerApi).send({
      username: 'johndoe', 
      email: 'johndoe@gmail.com', 
      password: '123456', 
      password2: '123456'
    })
    
    token = res.body.token
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error.name, error.message)
  }
})

afterAll(async () => {
  try {
    await clearDB()
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error.name, error.message)
  }
})

describe('Test creating a short link', () => {
  test('should create a shortened url', async () => {
    const res = await request(server)
      .post(api)
      .send({ originalUrl: 'https://google.com' })
      .set('Authorization', token.token)

    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.shortUrl).toContain('https://pbid.io')
  })

  test('should return url already saved', async () => {
    await Url.create({
      originalUrl: 'https://google.com',
      shortUrl: 'https://pbid.io/4d05f000',
      shortUrlHash: '4d05f000',
    })
    const res = await request(server).post(api).send({
      originalUrl: 'https://google.com',
    }).set('Authorization', token.token)

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('Url has already been saved')
    expect(res.body.error).toBeDefined()
  })

  test('should ask for a valid url field', async () => {
    const res = await request(server)
      .post(api)
      .send({ originalUrl: '' })

    expect(res.status).toBe(400)
    expect(res.body).toBeDefined()
    expect(res.body.message).toBe('Please provide a valid url')
  })

  test('should return error with invalid url format', async () => {
    const res = await request(server).post(api).send({originalUrl: 'ww.asd.ff.asdf.f'})

    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Url is not in a valid format')
  })
})
