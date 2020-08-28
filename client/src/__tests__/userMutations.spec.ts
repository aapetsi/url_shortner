import { mutations } from '../store/modules/user'

const {clearErrors, setErrors, setUser, setUserLoggedIn} = mutations

describe('Test mutations', () => {
  test('should set user in state', () => {
    const state = {
      user: {},
      errors: {},
      token: {},
      isLoggedIn: false
    }
    const userPayload = {user: {id: 'someid', email: 'johndoe@gmail.com', username: 'johndoe'}, token: {expireIn: '1d', token: 'sometokenstring'}}
    setUser(state, userPayload)
    console.log(state)
  })
  // user: {},
  // errors: {},
  // token: {},
  // isLoggedIn: false,
  
})
