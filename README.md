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
### 开发文档
[网址](https://yanghuanrong.github.io/RelaxUI/dist)

### 功能列表
- [x] 按钮组件
- [x] 栅格布局
- [x] 图标组件
- [x] 菜单组件
- [x] 下拉选择框
- [x] 复选框
- [x] 输入框


### 开发规范
1. 代码符合eslint
2. 组件标签以大写字母开头，驼峰形式


### 相关知识点
1. `vue`,`es6`,`es7`,`css3`,`element`,`react`,`iview`

### 周边
后期将推出`react`版本

### 由衷感谢
1. [`webpack4.0`底层架构师] [联想皮](https://github.com/JachinZou)
2. [`javascript`语言布道师] [JQuery-11](https://github.com/I-find-you11)
3. [`js`,`duckjs`,`vue`,`react`,`jquery`技术大佬]heytoo
4. [黑土鸭店]一系列成员
5. 长沙Web前端招聘群再坐的各位全是大佬

> 在此欢迎大家贡献星星，人人星我，我星人人
