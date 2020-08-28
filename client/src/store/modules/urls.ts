import AxiosAuth from '@/utils/AxiosAuth'

// initial state
const state = () => ({
  urls: [],
  errors: {},
  formError: '',
  saveSuccess: false
})

// getters
const getters = {}

// actions
export const actions = {
  async getUrls({ commit }) {
    try {
      const res = await AxiosAuth().get('/url/get_urls')

      commit('setUrls', res.data)
      commit('setErrors', {})
    } catch (error) {
      commit('setErrors', error.response.data)
    }
  },

  async shortenUrl({ commit }, payload) {
    try {
      const httpRegex = /^https?:\/\/[a-zA-Z]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i
      const wwwRegex = /^www\.[a-zA-Z]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i

      if (httpRegex.test(payload) || wwwRegex.test(payload)) {
        const res = await AxiosAuth().post('/url/createShortLink', {
          originalUrl: payload,
        })

        commit('saveUrl', res.data)
        commit('setFormError', '')
        commit('setErrors', {})
      } else {
        const errorMessage =
          'Make sure your url is of the form "https://somewebsite.com" or "www.somewebsite.com"'
        commit('setFormError', errorMessage)
      }
    } catch (error) {
      commit('setErrors', error.response.data)
    }
  },

  async deleteUrls({ commit }) {
    try {
      const res = await AxiosAuth().delete('/url/all')
      commit('deleteUrls')
      commit('setErrors', {})
      alert('All urls have been deleted')
    } catch (error) {
      commit('setErrors', error.response.data)
    }
  },

  async deleteUrl({ commit }, payload) {
    try {
      const res = await AxiosAuth().delete(`/url/one/${payload}`)

      alert('Url has been deleted')
      commit('deleteUrl', payload)
      commit('setErrors', {})
    } catch (error) {
      commit('setErrors', error.response.data)
    }
  },
}

// mutations
export const mutations = {
  setUrls(state, urls) {
    state.urls = [...urls]
  },

  saveUrl(state, url) {
    state.urls = [...state.urls, url]
  },

  deleteUrl(state, payload) {
    state.urls = state.urls.filter((url) => url._id !== payload)
  },

  deleteUrls(state) {
    state.urls = []
  },

  setErrors(state, payload) {
    state.errors = payload
  },

  setFormError(state, payload) {
    state.formError = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
