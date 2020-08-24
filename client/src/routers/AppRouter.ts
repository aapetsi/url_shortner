import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/main',
    component: () => import('@/components/UrlApp/MainApp.vue')
  },
  {
    path: '/',
    component: () => import('@/components/Login/Login.vue')
  },
  {
    path: '/register',
    component: () => import('@/components/Register/Register.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router