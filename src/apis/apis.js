//通用接口配置文件
//引入axios
import axios from 'axios'

//定义Ip地址
let IP = "http://127.0.0.1:5000";

//login
export const postLogin = (user) =>{
        return axios.post(`${IP}/checklogin`,user)                                                                   
}

//显示列表
export const showList = (user) =>{
          return axios.get(`${IP}/user/listUser`,user)
}

