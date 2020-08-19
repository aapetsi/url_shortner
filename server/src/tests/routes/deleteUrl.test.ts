import request from 'supertest'
import server from'../../server'
import Url from'../../models/Url.model'
import User from '../../models/User.model'
import { ITokenData } from 'src/types'

let id : string
let token: ITokenData
const registerApi = '/api/auth/register'

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

    const savedUrl = await Url.create({
      shortUrlHash: '2nf8dw8a',
      shortUrl: 'https://pbid.io/2nf8dw8a',
      originalUrl: 'https://yahoo.com'
    })
    id = savedUrl._id

    token = res.body.token
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error.name, error.message)
  }
})

describe('Test delete a url from database', () => {
  test('should successfully delete url', async () => {
    const res = await request(server).delete(`/api/url/one/${id}`).set('Authorization', token.token)

    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Url has been deleted')
  })

  test('should return url not found', async () => {
    const res = await request(server).delete('/api/url/one/5f0b3a60bcf44a1b50d309cc').set('Authorization', token.token)

    expect(res.status).toBe(404)
    expect(res.body.message).toBe('No such url exists')
  })

  test('should case a server error with wrong id', async () => {
    const res = await request(server).delete('/api/url/one/someid').set('Authorization', token.token)

    expect(res.status).toBe(500)
    expect(res.body.message).toBeDefined()
  })
})
