import request from 'supertest'
import server from'../../server'
import Url from'../../models/Url.model'

let id : string
const clearDB = async () => {
  await Url.deleteMany({})
}

beforeAll(async () => {
  try {
    await clearDB()
    let savedUrl = await Url.create ({
      shortUrlHash: '2nf8dw8a',
      shortUrl: 'https://pbid.io/2nf8dw8a',
      originalUrl: 'https://yahoo.com',
    })
    id = savedUrl._id
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

describe('Test delete a url from database', () => {
  test('should successfully delete url', async () => {
    const res = await request(server).delete(`/api/url/one/${id}`)

    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Url has been deleted')
  })
})
