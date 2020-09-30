import { mutations } from '../store/modules/user'
import { UserState } from '../types'

const {clearErrors, setErrors, setUser, setUserLoggedIn} = mutations

let state: UserState = {
  user: {
    _id: '',
    email: '',
    username: ''
  },
  errors: {},
  token: {
    expiresIn: '',
    token: ''
  },
  isLoggedIn: false
}

describe('Test user mutations', () => {
  test('should set user in state', () => {
    const state: UserState = {
      user: {
        _id: '',
        email: '',
        username: ''
      },
      errors: {},
      token: {
        expiresIn: '',
        token: ''
      },
      isLoggedIn: false
    }
    const userPayload = {user: {_id: 'someid', email: 'johndoe@gmail.com', username: 'johndoe'}, token: {expiresIn: '1d', token: 'sometokenstring'}}
    setUser(state, userPayload)
    
    expect(state.user).toBe(userPayload.user)
    expect(state.token).toBe(userPayload.token)
  })

  test('should set user logged in state', () => {
    setUserLoggedIn(state, true)
    expect(state.isLoggedIn).toBe(true)
  })
  
  test('should set errors', () => {
    let errorObj: Record<string, any> = {'username': 'Username is required'}
    setErrors(state, errorObj)
    
    expect(state.errors.username).toBeDefined()
    expect(state.errors.username).toBe('Username is required')
  })

  test('should clear all errors', () => {
    clearErrors(state)
    
    expect(state.errors).toStrictEqual({})
  })
})
