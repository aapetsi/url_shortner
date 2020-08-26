import request from 'supertest'
import server from '../../server'

describe('Test main server app', () => {
  test('should return url not found', async () => {
    const res = await request(server).get('/url')

    expect(res.status).toBe(404)
    expect(res.body.message).toBe('This URL can not be found')
  })
})
