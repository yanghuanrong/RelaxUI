# RelaxUI

[![vue 2](https://img.shields.io/badge/vue-2-42b983.svg?style=flat-square)](https://vuejs.org)  [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![Github All Releases](https://img.shields.io/github/downloads/atom/atom/total.svg?style=plastic)](https://www.npmjs.com/package/vue-relax-ui) [![Mozilla Add-on](https://img.shields.io/amo/stars/dustman.svg)](https://github.com/yanghuanrong/RelaxUI)


### 安装使用
``` bash
npm i vue-relax-ui
```
在`main.js`中引入
``` javascript
import Vue from 'vue'
import App from './App'
import router from './router'
import Relax from 'vue-relax-ui'
import 'vue-relax-ui/src/package/theme/style.css'
Vue.use(Relax)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```
### 组件文档
[RelaxUI组件网址](https://yanghuanrong.github.io/RelaxUI/docs)


### 技术支持
Rick团队