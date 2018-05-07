import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'
var Login, Home, Article, Changepassword, NewArticle
Home = (resolve) => require(['@/views/layout/home'], resolve)
Login = (resolve) => require(['@/views/login'], resolve)
Article = (resolve) => require(['@/views/articles'], resolve)
NewArticle = (resolve) => require(['@/views/NewArticle'], resolve)
Changepassword = (resolve) => require(['@/views/changepassword'], resolve)

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(mavonEditor)

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
      },
      {
        path: '/newarticle',
        name: 'NewArticle',
        component: NewArticle
      },
      {
        path: '/changepassword',
        name: 'Changepassword',
        component: Changepassword
      }
    ]
  }
]

export default new Router({
  routes: constRouterMap
})
