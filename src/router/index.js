import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import '@/viewTheme/nprogress.css'

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/select',
      component: () => import('@/view/select/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
