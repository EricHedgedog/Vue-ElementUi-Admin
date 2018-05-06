import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
var Login, Home, Article
Home = (resolve) => require(['@/views/layout/home'], resolve)
Login = (resolve) => require(['@/views/login'], resolve)
Article = (resolve) => require(['@/views/articles'], resolve)

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
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/articles',
        name: 'Article',
        component: Article
      }
    ]
  }
]

export default new Router({
  routes: constRouterMap
})
