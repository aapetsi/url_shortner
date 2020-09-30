import request from 'supertest'
import User from '../../models/User.model'
import server from '../../server'
import clearDB from '../../helpers/clearDB'

interface Data {
  username?: string,
  email?: string,
  password?: string,
  password2?: string
}

const api = '/api/auth/register'

const createResponse = async (data: Data) => {
  const response = await request(server).post(api).send(data)

  return response
}

beforeAll(async () => {
  try {
    await clearDB()
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error.name, error.message)
  }
})

describe('Test registering a user', () => {
  test('should return errors with empty fields', async () => {
    const res = await createResponse({})

    expect(res.status).toBe(400)
    expect(res.body.email).toBe('Email is required')
    expect(res.body.username).toBe('Username is required')
    expect(res.body.password).toBe('Password field is required')
    expect(res.body.password2).toBe('Confirm password field is required')
  })

  test('should throw error passwords must match', async () => {
    const res = await createResponse({username: 'johndoe', email: 'johndoe@gmail.com', password: '123456', password2: '123457'})

    expect(res.status).toBe(400)
    expect(res.body.password2).toBe('Both passwords must match')
  })

  test('should successfully create a new user', async () => {
    const res = await createResponse({username: 'johndoe', email: 'johndoe@gmail.com', password: '123456', password2: '123456'})

    expect(res.status).toBe(201)
    expect(res.body.user._id).toBeDefined()
    expect(res.body.user.email).toBeDefined()
    expect(res.body.user.email).toBeDefined()
    expect(res.body.token).toBeDefined()
  })

  test('should return user already exists', async () => {
    const newUser = new User({
      email: 'johndoe@gmail.com',
      username: 'johndoe',
      password: '123456'
    })
    await newUser.save()
    const res = await createResponse({username: 'johndoe', email: 'johndoe@gmail.com', password: '123456', password2: '123456'})

    expect(res.status).toBe(400)
    expect(res.body.message).toBe('User already exists')
  })
})
