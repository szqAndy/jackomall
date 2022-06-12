import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '.././views/home/HomeItem'
import Login from '.././views/login/Login'
import Register from '.././views/register/Register'
import Shopping from '.././views/shopping/Shopping'

const Details = () => import('.././views/details/Details')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home', // url路径
    component: Home, // 需要显示的组件,
    meta: { // 元数据（描述数据的数据）
      title: '首页'
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/shopping',
    component: Shopping,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/details/:commodity',
    component: Details,
    meta: {
      title: '详情'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
