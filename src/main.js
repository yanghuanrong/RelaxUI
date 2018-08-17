// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Relax from './package'
import './package/theme/style.less'
import './viewTheme/global.less'

Vue.config.productionTip = false

Vue.use(Relax)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
