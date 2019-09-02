// //引入axios
import axios from 'axios'

// // 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    console.log('config',config)
    const token = localStorage.getItem('token');
    if(token){//设置请求头
        console.log('token',token)
        axios.defaults.headers.common['token'] = token;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // console.log('response',response)
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
