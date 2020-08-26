import request from 'supertest'
import server from'../../server'
import Url from'../../models/Url.model'
import { ITokenData, UserInfo } from 'src/types'
import clearDB from '../../helpers/clearDB'

let id : string
let token: ITokenData
let user: UserInfo

const registerApi = '/api/auth/register'

const createResponse = async (_id: string, auth: ITokenData) => {
  const response = await request(server)
    .delete(`/api/url/one/${_id}`)
    .set('Authorization', auth.token)

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

    user = res.body.user
    token = res.body.token

    const savedUrl = await Url.create({
      shortUrlHash: '2nf8dw8a',
      shortUrl: 'https://pbid.io/2nf8dw8a',
      originalUrl: 'https://yahoo.com',
      dateCreated: '2020-08-20T10:58:01.964Z',
      user_id: user._id
    })

    id = savedUrl._id
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error.name, error.message)
  }
})

describe('Test delete a url from database', () => {
  test('should successfully delete url', async () => {
    const res = await createResponse(id, token)

    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Url has been deleted')
  })

  test('should return url not found', async () => {
    const res = await createResponse('5f0b3a60bcf44a1b50d309cc', token)

    expect(res.status).toBe(404)
    expect(res.body.message).toBe('No such url exists')
  })

  test('should case a server error with wrong id', async () => {
    const res = await createResponse('someid', token)

    expect(res.status).toBe(500)
    expect(res.body.message).toBeDefined()
  })
})
