import AxiosAuth from '@/utils/AxiosAuth'

// initial state
const state = () => ({
  user: {},
  errors: {},
  token: {},
  isLoggedIn: false,
})

// actions
const actions = {
  async register({ commit }, payload) {
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

  async login({ commit }, payload) {
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

  logout({ commit }) {
    commit('setUserLoggedIn', false)
    commit('setUser', { user: {}, token: {} })
    commit('clearErrors')
    localStorage.clear()
  },
}

// mutations
const mutations = {
  setUser(state, payload) {
    state.user = payload.user
    state.token = payload.token
  },
  setUserLoggedIn(state, payload) {
    state.isLoggedIn = payload
  },
  setErrors(state, payload) {
    state.errors = payload
  },
  clearErrors(state) {
    state.errors = {}
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
