import AxiosAuth from "@/utils/AxiosAuth"

// initial state
const state = () => ({
  urls: []
})

// getters
const getters = {}

// actions
const actions = {
  async getUrls({ commit }) {
    const res = await AxiosAuth().get('/urls/get_urls')
    commit('setUrls', res.data)
  },

  async deleteUrls({ commit }) {
    const res = await AxiosAuth().delete('/url/all')
    commit('deleteUrls')
  }
}

// mutations
const mutations = {
  setUrls(state, urls) {
    state.urls = {...state.urls, ...urls}
  },

  deleteUrls(state) {
    state.urls = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}