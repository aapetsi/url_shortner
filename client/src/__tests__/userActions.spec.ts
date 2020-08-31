import { actions } from '../store/modules/user'
import { ActionContext } from 'vuex'

describe('Test user actions', () => {
  test('should logout user', async () => {
    const commit = jest.fn()
    actions.logout({ commit })

    expect(commit).toHaveBeenCalledWith('setUserLoggedIn', false)
    expect(commit).toHaveBeenCalledTimes(3)
    expect(commit).toHaveBeenCalledWith('setUser', {user: {}, token: {}})
    expect(commit).toHaveBeenCalledWith('clearErrors')
  })
})