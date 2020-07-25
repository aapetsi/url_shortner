import request from 'supertest'
import server from'../../server'
import Url from'../../models/Url.model'

const api = '/api/url/get_urls'

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

describe('Test getting all links from database', () => {
  test('should successfully return empty array', async () => {
    const res = await request(server).get(api)

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(0)
  })

  test('should return 2 saved links', async () => {
    const urls = [
      {
        shortUrlHash: '2nf8dw8r',
        shortUrl: 'https://pbid.io/2nf8dw8r',
        originalUrl: 'https://google.com',
      },
      {
        shortUrlHash: '2nf8dw8a',
        shortUrl: 'https://pbid.io/2nf8dw8a',
        originalUrl: 'https://yahoo.com',
      },
    ]
    urls.forEach((url) => {
      Url.create(url)
    })

    const res = await request(server).get(api)

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(2)
  })
})
