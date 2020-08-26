import Vue from 'vue'
import Vuex from 'vuex'
import urls from './modules/urls'
import user from './modules/users'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    urls,
    user
  },
  strict: DEBUG
})

export default store