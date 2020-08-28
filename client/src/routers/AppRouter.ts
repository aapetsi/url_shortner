import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) => {
  if (store.getters['user/isAuthenticated']) {
    store.dispatch('setUserLoggedIn', true)
    next()
    return
  }
  next('/')
}

console.log(store.getters['user/isAuthenticated'])

const routes: Array<RouteConfig> = [
  {
    path: '/main',
    component: () => import('@/components/UrlApp/MainApp.vue'),
    // beforeEnter: (to, from, next) => {      
    //   if ((to.name !== 'login') && !store.state.user.isLoggedIn) next({path: '/'})
    //   else next()
    // },
    // beforeEnter: ifAuthenticated,
    name: 'main'
  },
  {
    path: '/',
    component: () => import('@/components/Login/Login.vue'),
    name: 'login',
    beforeEnter: ifAuthenticated
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