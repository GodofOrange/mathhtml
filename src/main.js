// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import qs from 'qs'
import ECharts from 'vue-echarts/components/ECharts.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios // 全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs
Vue.prototype.$baseUrl = 'http://127.0.0.1:8081'
Vue.prototype.$baseDomain = '127.0.0.1:8081'
NProgress.inc(0.1)
NProgress.configure({ easing: 'ease', speed: 100, showSpinner: false })
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

Vue.component('v-chart', ECharts)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
