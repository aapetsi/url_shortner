import AxiosAuth from '@/utils/AxiosAuth'
import { UserState } from '@/types/'

interface UserPayload {
  user: Record<string, unknown>,
  token: Record<string, unknown>
}

// initial state
const state = () => ({
  user: {},
  errors: {},
  token: {},
  isLoggedIn: false,
})

// actions
export const actions = {
  async register({ commit }, payload: Record<string, unknown>): Promise<void>{
    try {
      const { email, username, password, password2, router } = payload
      const res = await AxiosAuth().post('/auth/register', {
        email,
        username,
        password,
        password2,
      })
      commit('setUser', res.data)
      commit('setUserLoggedIn', true)
      commit('clearErrors')
      localStorage.setItem('token', res.data.token.token)
      router.push('/main')
    } catch (error) {
      commit('setErrors', error.response.data)
    }
  },

  async login({ commit }, payload: Record<string, unknown>): Promise<void> {
    try {
      const res = await AxiosAuth().post('/auth/login', {
        email: payload.email,
        password: payload.password,
      })
      commit('setUser', res.data)
      commit('setUserLoggedIn', true)
      commit('clearErrors')
      localStorage.setItem('token', res.data.token.token)
      payload.router.push('/main')
    } catch (error) {
      commit('setErrors', error.response.data)
    }
  },

  logout({ commit }): void {
    commit('setUserLoggedIn', false)
    commit('setUser', { user: {}, token: {} })
    commit('clearErrors')
    localStorage.clear()
  },
}

// mutations
export const mutations = {
  setUser(state: UserState, payload: UserPayload) {
    state.user = payload.user
    state.token = payload.token
  },
  setUserLoggedIn(state: UserState, payload: boolean) {
    state.isLoggedIn = payload
  },
  setErrors(state: UserState, payload: Record<string, unknown>) {
    state.errors = payload
  },
  clearErrors(state: UserState) {
    state.errors = {}
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
