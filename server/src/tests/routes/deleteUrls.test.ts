import request from 'supertest'
import server from'../../server'
import Url from'../../models/Url.model'


const clearDB = async () => {
  await Url.deleteMany({})
}

beforeAll(async () => {
  try {
    await clearDB()
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

describe('Test delete all from database', () => {
  test('should successfully delete all urls', async () => {
    const res = await request(server).delete('/api/url/all')

    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Urls have been deleted')
  })
})
