import request from 'supertest'
import server from '../../server'
import { ITokenData } from '../../types'
import clearDB from '../../helpers/clearDB'
import Url from '../../models/Url.model'

const api = '/api/url/createShortLink'
const registerApi = '/api/auth/register'

let token: ITokenData

const createResponse = async (originalUrl: string, auth: ITokenData) => {
  const {token} = auth
  const response = await request(server)
      .post(api)
      .send({ originalUrl })
      .set('Authorization', token)
  return response
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

describe('Test creating a short link', () => {
  test('should create a shortened url', async () => {
    const res = await createResponse('https://google.com', token)

    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.shortUrl).toContain('https://pbid.io')
  })

  test('should return url already saved', async () => {
    await Url.create({
      originalUrl: 'https://google.com',
      shortUrl: 'https://pbid.io/4d05f000',
      shortUrlHash: '4d05f000',
      dateCreated: '2020-08-20T10:57:42.932Z'
    })

    const res = await createResponse('https://google.com', token)

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('Url has already been saved')
    expect(res.body.error).toBeDefined()
  })

  test('should ask for a valid url field', async () => {
    const res = await createResponse('', token)

    expect(res.status).toBe(400)
    expect(res.body).toBeDefined()
    expect(res.body.message).toBe('Please provide a valid url')
  })

  test('should return error with invalid url format', async () => {
    const res = await createResponse('ww.asd.ff.asdf.f', token)

    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Url is not in a valid format')
  })

  test('should return authentication error', async () => {
    const res = await createResponse('www.google.com', {token: '', expiresIn: ''})

    expect(res.status).toBe(400)
    expect(res.body.message).toBe('No credentials provided')
  })

  test('should return error with wrong token', async () => {
    const res = await createResponse('www.google.com', {token: 'wrongToken', expiresIn: '1d'})

    expect(res.status).toBe(401)
    expect(res.body.message).toBe('jwt malformed')
  })
})
