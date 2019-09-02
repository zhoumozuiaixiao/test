// //引入axios
import axios from 'axios'

// // 添加一个请求拦截器
// axios.interceptors.request.use(function (config) {
//     console.log('config',config)
//     const token = localStorage.getItem('token');
//     if(token){//设置请求头
//         console.log('token',token)
//         axios.defaults.headers.common['token'] = token;
//     }
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });

// // 添加一个响应拦截器
// axios.interceptors.response.use(function (response) {
//     // console.log('response',response)
//     // Do something with response data
//     return response.data;
//   }, function (error) {
//     // Do something with response error
//     return Promise.reject(error);
// });
//创建以额axios实例

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
   