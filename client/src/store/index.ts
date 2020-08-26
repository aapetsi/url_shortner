import Vue from 'vue'
import Vuex from 'vuex'
import urls from './modules/urls'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    urls,
    user
  },
})

export default store