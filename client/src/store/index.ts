import Vue from 'vue'
import Vuex from 'vuex'
import urls from './modules/urls'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    urls,
    user
  },
  plugins: [createPersistedState()]
})

export default store