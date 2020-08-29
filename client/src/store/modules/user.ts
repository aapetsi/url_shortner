import AxiosAuth from '@/utils/AxiosAuth'
import { RootState, UserState, User, Token, RegisterPayload, Errors } from '@/types/'
import { ActionContext } from 'vuex'

interface UserPayload {
  user: User,
  token: Token
}

// initial state
const state = (): UserState => ({
  user: {} as User,
  errors: {},
  token: {} as Token,
  isLoggedIn: false,
})

// getters
const getters = {
  isAuthenticated: (state: UserState) => !!state.token
}

// actions
export const actions = {
  async register({ commit }: ActionContext<UserState, RootState>, payload: RegisterPayload): Promise<void>{
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

  async login({ commit }: ActionContext<UserState, RootState>, payload: RegisterPayload): Promise<void> {
    try {
      const {email, password, router} = payload
      const res = await AxiosAuth().post('/auth/login', {
        email,
        password,
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

  logout({ commit }: ActionContext<UserState, RootState>): void {
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
  setErrors(state: UserState, payload: Errors) {
    state.errors = payload
  },
  clearErrors(state: UserState) {
    state.errors = {}
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
