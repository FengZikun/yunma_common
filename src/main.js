// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
