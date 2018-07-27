// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Warn from './components/modules/warn'
import Loading from './components/modules/loading'
import Page from './components/modules/page'
import router from './router'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import './assets/js/echarts.js'
import './assets/js/china.js'
import 'echarts/map/js/china'
import VueResource from 'vue-resource'
import store from './store.js'
Vue.use(VueResource)


Vue.config.productionTip = false
//开启debug模式
Vue.config.debug = true
Vue.component('warn',Warn)
Vue.component('page',Page)
Vue.component('loading',Loading)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App, Warn, Page, Loading}
})
