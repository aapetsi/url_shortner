import request from 'supertest'
import server from'../../server'
import Url from'../../models/Url.model'
import { ITokenData } from 'src/types'
import clearDB from '../../helpers/clearDB'

const api = '/api/url/get_urls'
const registerApi = '/api/auth/register'
let token: ITokenData

const createResponse = async (auth: ITokenData) => {
  const response = await request(server).get(api).set('Authorization', auth.token)

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

describe('Test getting all links from database', () => {
  test('should successfully return empty array', async () => {
    const res = await createResponse(token)

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(0)
  })

  test('should return 2 saved links', async () => {
    const urls = [
      {
        shortUrlHash: '2nf8dw8r',
        shortUrl: 'https://pbid.io/2nf8dw8r',
        originalUrl: 'https://google.com',
        dateCreated: '2020-08-20T10:58:01.964Z'
      },
      {
        shortUrlHash: '2nf8dw8a',
        shortUrl: 'https://pbid.io/2nf8dw8a',
        originalUrl: 'https://yahoo.com',
        dateCreated: '2020-08-20T10:58:01.964Z'
      },
    ]
    urls.forEach((url) => {
      Url.create(url)
    })

    const res = await createResponse(token)

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(2)
  })
})
