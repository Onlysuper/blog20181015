import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Layout from '@/views/LayoutPage'
import Login from '@/views/Login'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '',
      component: Layout,
      // redirect: "dashboard",
      children: [
        { path: 'dashboard', component: () => import('@/views/Dashboard/index.vue'), name: 'dashboard', meta: { title: '首页', keepAlive: true } },
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: Layout,
      redirect: "./user/user",
      children: [
        { path: 'user', component: () => import('@/views/User/user'), name: 'user', meta: { title: '管理员', keepAlive: true } },
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: Layout,
      redirect: "./user/user",
      children: [
        { path: 'user', component: () => import('@/views/User/user'), name: 'user', meta: { title: '管理员', keepAlive: true } },
      ]
    }
  ]
})
