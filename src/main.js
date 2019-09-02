import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入elementUI组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入全局样式
import './assets/styles/commones.css'

//注册
Vue.use(ElementUI)
Vue.config.productionTip = false

//全局路由守卫
router.beforeEach((to,from,next) =>{
  if(to.meta.requiresAuth){
      //获取token
      let token =localStorage.getItem('token')
      if(token){
        next()//放行
      }else{
        next('/')//拦截
      }
  }else{
     next()//不需要验证，直接放行
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
