import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',      
      component: () => import('./views/Index'),
      //二级路由
      children:[
        //系统管理路由
        {
          path:'/index/addaccount',
          meta:{requiresAuth:true},
          component:() => import('./views/modules/Account/Addaccount'),
          
        }, 
         {
          path:'/index/showaccount',
          meta:{requiresAuth:true},
          component:() => import('./views/modules/Account/Showaccount')
        }, 
         {
          path:'/index/changepwd',
          meta:{requiresAuth:true},
          component:() => import('./views/modules/Account/Changepwd')
        }
      ]
    }
  ]
})
