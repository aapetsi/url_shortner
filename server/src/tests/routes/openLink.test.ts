import request from "supertest"
import server from '../../server'
import clearDB from '../../helpers/clearDB'
import Url from 'src/models/Url.model'
import User from 'src/models/User.model'
import { ITokenData,IUrlDocument } from 'src/types'

let token: ITokenData
let savedUrl: IUrlDocument
let wrongID: string

beforeAll(async () => {
  await clearDB()
  const user = await request(server).post('/api/auth/register').send({
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: '123456',
    password2: '123456'
  })
  
  token = user.body.token
  wrongID = user.body.user._id

  const url = await request(server).post('/api/url/createShortLink').send({ originalUrl: 'https://google.com'}).set('Authorization', token.token)

  savedUrl = url.body
})

describe('Test open link', () => {
  test('should return url not found', async () => {
    const res = await request(server).get(`/api/url/open/${wrongID}`)
    
    expect(res.status).toBe(404)
    expect(res.body.message).toBe('Url not found')
  })

  test('should return server error', async () => {
    const res = await request(server).get(`/api/url/open/wrongid`)

    expect(res.status).toBe(500)
    expect(res.body.message).toContain('ObjectId failed for value')
  })

  test('should redirect to new url', async () => {
    const res = await request(server).get(`/api/url/open/${savedUrl._id}`)

    expect(res.status).toBe(302)
  })
})
