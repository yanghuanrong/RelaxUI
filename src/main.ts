import Vue from 'vue'
import App from './document/App.vue'
import router from './document/router/index'
import ViewComponet from './document/components'
import Relax from './package'
import './package/theme/style.less'
import './document/style/global.less'
import VueHighlightJS from 'vue-highlight.js'
import 'vue-highlight.js/lib/allLanguages'
Vue.config.productionTip = false

Vue.use(Relax)
Vue.use(ViewComponet)
Vue.use(VueHighlightJS)
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
