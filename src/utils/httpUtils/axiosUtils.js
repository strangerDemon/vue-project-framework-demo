/**
 * Custom axios instance
 * > - [Axios的配置](https://blog.ygxdxx.com/2017/01/29/Axios-Config/)
 * > - [Vuex2和Axios的开发](https://blog.ygxdxx.com/2017/02/01/Vuex2&Axios-Develop/)
 * > - [Axios全攻略](https://blog.ygxdxx.com/2017/02/27/Axios-Strategy/)
 * > - [Vue 全家桶 + axios 前端实现登录拦截、登出、拦截器等功能](https://github.com/superman66/vue-axios-github)
 * > - [axios和网络传输相关知识的学习实践](http://www.jianshu.com/p/8e5fb763c3d7)
 * > - [Vue.js REST API Consumption with Axios](https://alligator.io/vuejs/rest-api-axios/)
 */

import {
  MessageBox
} from 'element-ui';
import querystring from 'querystring'
import axios from 'axios'
import ConfigUtils from "../configUtils"

axios.defaults.withCredentials=true;
const instance = axios.create({
  baseURL:ConfigUtils.systemConfig.api,
  timeout: 60000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})


// request拦截器
instance.interceptors.request.use(config => {
  if (!config.data) {
    config.data = {}
  }
  config.data = querystring.stringify({
    para: JSON.stringify(config.data)
  })
  return config

}, error => {
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
instance.interceptors.response.use(
  response => {
    const code = response.data.RespCode
    if (response.config.url.indexOf("loginByToken") > 0) {
      return response.data
    } else if (code === 1) {
      if (response.data.Results==undefined) {//!response.data.Results把空数据 也返回true了
        return true
      } else {
        return response.data.Results
      }
    } else {
      MessageBox({
          message: response.data.RespDesc,
          type: 'warning',
          duration: 2 * 1000
        })
      return false
    }
  },
  error => {
    MessageBox({
      message: error.message,
      type: 'warning',
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
)

export default instance
