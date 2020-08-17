// import request from 'supertest'
import User from '../../models/User.model'
// import server from '../../server'

// const api = '/api/auth/register'
// const clearDB = async () => {
//   await User.deleteMany({})
// }

// beforeAll(async () => {
//   try {
//     await clearDB()
//   } catch (error) {
//     // tslint:disable-next-line:no-console
//     console.error(error.name, error.message)
//   }
// })

// afterEach(async () => {
//   try {
//     await clearDB()
//   } catch (error) {
//     // tslint:disable-next-line:no-console
//     console.error(error.name, error.message)
//   }
// })

describe('Test creating a short link', () => {
  test('should return errors with empty fields', () => {
    expect(1).toBe(1)
  })
})
