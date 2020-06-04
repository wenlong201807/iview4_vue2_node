// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import
import axios from 'axios'
import echarts from 'echarts'
import hljs from '@/libs/lib_highlight/highlight.js'
import '@/libs/styles/highlight/googlecode.css' // 样式文件
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = '/cors'
// } else {
//   axios.defaults.baseURL = 'http://106.54.207.247:8086'
// }
// axios.defaults.baseURL = 'http://106.54.207.247:8086' // 配置axios请求的地址
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
// axios.defaults.crossDomain = true
// axios.defaults.withCredentials = true // 设置cross跨域 并设置访问权限 允许跨域携带cookie信息
// axios.defaults.headers.common['Authorization'] = 'fhfh' // 设置请求头为 Authorization
Vue.prototype.$axios = axios

Vue.prototype.$echarts = echarts

Vue.use(Vuex)
Vue.use(iView)
Vue.config.productionTip = false

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  setTimeout(() => {
    blocks.forEach((block) => {
      // console.log(666)
      // hljs.hljs.highlightBlock(block)
      // hljs.hljs.initLineNumbersOnLoad()
      hljs.highlightBlock(block)
      hljs.initLineNumbersOnLoad()
    })
  }, 200)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
