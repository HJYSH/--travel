import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Homg/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/Detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 页面跳转之后清除之前的滚动痕迹
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
