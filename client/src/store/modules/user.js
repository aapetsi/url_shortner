// initial state
const state = () => ({
  user: {},
})

// actions
const actions = {
  register({ commit }) {
    console.log('hello')
  },
  login({ commit }) {
    console.log('hello')
  },
  logout({ commit }) {
    console.log('hello')
  },
}

// mutations
const mutations = {
  setUser(state, user) {
    state.user = { ...user }
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
