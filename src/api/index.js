import axios from 'axios'
import store from '@/store'
import {
  getToken
} from '@/api/api_token'
// import router from '../router';

// create an axios instance
const service = axios.create({
  //baseURL: process.env.BASE_API, // api的base_url
  // baseURL: 'http://test19.qtopay.cn/admin', // api的base_url
  // baseURL: 'http://test19.qtopay.cn/admin', // api的base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['Admin-Token'] = getToken() // 让每个请求携带token-- ['Admin-Token']为自定义key 请根据实际情况自行修改
  // }
  // return config
}, error => {
  // Do something with request error
  // console.log(error) // for debug
  // Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {

  }, error => {

  })


const http = {
  // get: function (url, query) {
  //   return service({
  //     url: url,
  //     method: 'get',
  //     params: query
  //   })
  // },
  // 'Admin-Token': getToken(),
  request: service
};
export default http