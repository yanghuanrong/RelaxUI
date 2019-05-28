import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import routeTemp from './routeTemp'
import '@/docs/style/nprogress.css'

Vue.use(Router)

const routes = []

routeTemp.forEach((item) => {
  routes.push(...item.route)
})

const router = new Router({
  routes: routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
