import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/button',
      component: () => import('@/document/view/button/index.vue')
    },
    {
      path: '/input',
      component: () => import('@/document/view/input/index.vue')
    },
  ],
});
