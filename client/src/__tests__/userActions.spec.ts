import { actions } from '../store/modules/user'
import axios from 'axios'

let url = ''
let body = {}

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>


// jest.mock('axios', () => ({
//   post: (_url, _body) => {
//     return new Promise((resolve) => {
//       url = _url
//       body = _body
//       resolve(true)
//     })
//   },
// }))

describe('Test user actions', () => {
  test('should logout user', async () => {
    const commit = jest.fn()
    actions.logout({ commit })

    expect(commit).toHaveBeenCalledWith('setUserLoggedIn', false)
    expect(commit).toHaveBeenCalledTimes(3)
    expect(commit).toHaveBeenCalledWith('setUser', { user: {}, token: {} })
    expect(commit).toHaveBeenCalledWith('clearErrors')
  })

  test('should register a user', async () => {
    const commit = jest.fn()
    const router = jest.fn()
    mockedAxios.get.mockResolvedValueOnce({
      data: {

      }
    })
    
    await actions.login({ commit }, {email: 'johndoe', password: '123456', router: jest.fn()})
  })
})
