import request from 'supertest'
import server from '../../server'
import clearDB from '../../helpers/clearDB'


const api = '/api/auth/login'

beforeAll(async () => {
  try {
    await clearDB()
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error.name, error.message)
  }
})

beforeEach(async () => {
  await request(server).post('/api/auth/register').send({
    email: 'johndoe@gmail.com',
    username: 'johndoe',
    password: '123456',
    password2: '123456'
  })
})

afterAll(async () => {
  try {
    await clearDB()
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error.name, error.message)
  }
})

describe('Test user login', () => {
  test('should return user not found', async () => {
    const res = await request(server).post(api).send({
      email: 'joy@gmail.com',
      password: 'abc1234'
    })

    expect(res.status).toBe(404)
    expect(res.body.message).toBe('User not found')
  })

  test('should return invalid credentials', async () => {
    const res = await request(server).post(api).send({
      email: 'johndoe@gmail.com',
      password: '12345'
    })

    expect(res.status).toBe(401)
    expect(res.body.message).toBe('Invalid credentials')
  })

  test('should return success on login', async () => {
    const res = await request(server).post(api).send({
      email: 'johndoe@gmail.com',
      password: '123456'
    })

    expect(res.status).toBe(200)
    expect(res.body.token).toBeDefined()
    expect(res.body.user._id).toBeDefined()
    expect(res.body.user.email).toBeDefined()
    expect(res.body.user.username).toBeDefined()
  })

  test('should return error for required fields', async () => {
    const res = await request(server).post(api).send({})

    expect(res.status).toBe(400)
    expect(res.body.email).toBe('Email is required')
    expect(res.body.password).toBe('Password field is required')
  })
})
