import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/button',
      name: 'button',
      component: () => import('@/view/Button')
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('@/view/Icon')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('@/view/grid')
    }
  ]
})
