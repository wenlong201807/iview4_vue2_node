
import Vue from 'vue'
// import axios from "axios";
import axiosInit from './libs/utils/axios_init'
console.log('我是全局额外配置文件')

// 普通用法：
// axios.post(url, params).then((res)=>{

// }).catch((err)=>{

// })

// 把axios 作为Vue的原型属性
window.axios = axiosInit()
Vue.prototype.$http = window.axios



// 页面运用
// this.$http.post(url, params).then(res=>{}).catch(error=>{});
