import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/button',
      component: () => import('@/view/button/index.vue')
    },
    {
      path: '/icon',
      component: () => import('@/view/icon/index.vue')
    },
    {
      path: '/grid',
      component: () => import('@/view/grid/index.vue')
    },
    {
      path: '/input',
      component: () => import('@/view/input/index.vue')
    },
    {
      path: '/checkbox',
      component: () => import('@/view/checkbox/index.vue')
    }
  ]
})
