import request from 'supertest'
import server from'../../server'
import Url from'../../models/Url.model'
import { ITokenData, UserInfo } from 'src/types'
import clearDB from '../../helpers/clearDB'

let user: UserInfo
let token: ITokenData

const registerApi = '/api/auth/register'

beforeAll(async () => {
  try {
    await clearDB()
    const res = await request(server).post(registerApi).send({
      username: 'johndoe',
      email: 'johndoe@gmail.com',
      password: '123456',
      password2: '123456'
    })

    user = res.body.user
    token = res.body.token
    
    const urls = [
      {
        shortUrlHash: '2nf8dw8r',
        shortUrl: 'https://pbid.io/2nf8dw8r',
        originalUrl: 'https://google.com',
        dateCreated: '2020-08-20T10:58:01.964Z',
        user_id: user._id
      },
      {
        shortUrlHash: '2nf8dw8a',
        shortUrl: 'https://pbid.io/2nf8dw8a',
        originalUrl: 'https://yahoo.com',
        dateCreated: '2020-08-20T10:58:01.964Z',
        user_id: user._id
      },
    ]
    urls.forEach((url) => {
      Url.create(url)
    })

    
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error.name, error.message)
  }
})

describe('Test delete all from database', () => {
  test('should successfully delete all urls', async () => {
    const res = await request(server).delete('/api/url/all').set('Authorization', token.token)

    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Urls have been deleted')
  })
})
