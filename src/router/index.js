import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
var Login
Login = (resolve) => require(['@/views/login'], resolve)

Vue.use(Router)
Vue.use(ElementUI)

const constRouterMap = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default new Router({
  routes: constRouterMap
})
