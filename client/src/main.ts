import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/routers/AppRouter'
import App from '@/App.vue'
// import router from './routers/AppRouter.vue'

Vue.config.productionTip = false

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app')


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
