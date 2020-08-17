import request from 'supertest'
import User from '../../models/User.model'
import server from '../../server'

const api = '/api/auth/register'
const clearDB = async () => {
  await User.deleteMany({})
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

describe('Test registering a user', () => {
  test('should return errors with empty fields', async () => {
    const res = await request(server).post(api).send({})

    expect(res.status).toBe(400)
    expect(res.body.email).toBe('Email is required')
    expect(res.body.username).toBe('Username is required')
    expect(res.body.password).toBe('Password field is required')
    expect(res.body.password2).toBe('Confirm password field is required')
  })

  test('should return user already exists', async () => {
    
  })
})
