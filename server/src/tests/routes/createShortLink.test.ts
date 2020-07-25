import request from 'supertest'
import mongoose from 'mongoose'
import Url from '../../models/Url.model'
import server from '../../server'

const api = '/api/url/createShortLink'
const clearDB = async () => {
  await Url.deleteMany({})
}

beforeAll(async () => {
  try {
    await clearDB()
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error.name, error.message)
  }
})

afterEach(async () => {
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
    })

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('Url has already been saved')
    expect(res.body.error).toBeDefined()
  })

  test('should ask for a valid url field', async () => {
    const res = await request(server)
      .post('/api/url/createShortLink')
      .send({ originalUrl: '' })

    expect(res.status).toBe(400)
    expect(res.body).toBeDefined()
    expect(res.body.message).toBe('Please provide a valid url')
  })
})
