import AxiosAuth from '@/utils/AxiosAuth'
import { ActionContext } from 'vuex'
import { UrlState, RootState, Urls, UrlsType, Errors } from '@/types'

// initial state
const state = (): UrlState => ({
  urls: [],
  errors: {},
  formError: '',
  saveSuccess: true
})

// getters
const getters = {}

// actions
export const actions = {
  async getUrls({ commit }: ActionContext<UrlState, RootState>): Promise<void> {
    try {
      const res = await AxiosAuth().get('/url/get_urls')

      commit('setUrls', res.data)
      commit('setErrors', {})
    } catch (error) {
      commit('setErrors', error.response.data)
    }
  },

  async shortenUrl({ commit }: ActionContext<UrlState, RootState>, payload: string): Promise<void> {
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
        commit('setSaveSuccess', true)
      } else {
        const errorMessage =
          'Make sure your url is of the form "https://somewebsite.com" or "www.somewebsite.com"'
        commit('setFormError', errorMessage)
        commit('setSaveSuccess', false)
      }
    } catch (error) {
      commit('setErrors', error.response.data)
    }
  },

  async deleteUrls({ commit }: ActionContext<UrlState, RootState>): Promise<void> {
    try {
      await AxiosAuth().delete('/url/all')
      commit('deleteUrls')
      commit('setErrors', {})
      alert('All urls have been deleted')
    } catch (error) {
      commit('setErrors', error.response.data)
    }
  },

  async deleteUrl({ commit }: ActionContext<UrlState, RootState>, payload: string): Promise<void> {
    try {
      await AxiosAuth().delete(`/url/one/${payload}`)

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
  setUrls(state: UrlState, urls: UrlsType): void {
    state.urls = [...urls]
  },

  saveUrl(state: UrlState, url: Urls): void {
    state.urls = [...state.urls, url]
  },

  deleteUrl(state: UrlState, payload: string): void {
    state.urls = state.urls.filter((url) => url._id !== payload)
  },

  deleteUrls(state: UrlState): void {
    state.urls = []
  },

  setErrors(state: UrlState, payload: Errors): void {
    state.errors = payload
  },

  setFormError(state: UrlState, payload: string): void {
    state.formError = payload
  },

  setSaveSuccess(state: UrlState, payload: boolean): void {
    state.saveSuccess = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
