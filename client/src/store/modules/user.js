import AxiosAuth from '@/utils/AxiosAuth'
import AxiosNoAuth from '@/utils/AxiosNoAuth'

// initial state
const state = () => ({
  user: {},
  errors: {},
  token: {},
  isLoggedIn: false,
})

// actions
const actions = {
  register({ commit }, payload) {
    console.log('register user')
  },

  async login({ commit }, payload) {
    try {
      const res = await AxiosNoAuth().post('/auth/login', {
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
    console.log('logout user')
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
