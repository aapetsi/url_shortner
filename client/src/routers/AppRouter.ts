import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/main',
    component: () => import('@/components/UrlApp/MainApp.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      
      if ((to.name !== 'login') && !store.state.user.isLoggedIn) next({path: '/'})
      else next()
    },
    name: 'main'
  },
  {
    path: '/',
    component: () => import('@/components/Login/Login.vue'),
    name: 'login'
  },
  {
    path: '/register',
    component: () => import('@/components/Register/Register.vue'),
    name: 'register'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router