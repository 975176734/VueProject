import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';//引入组件库
import 'element-ui/lib/theme-chalk/index.css';//全局的css样式

Vue.use(VueRouter)
Vue.use(ElementUI)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('@/views/HomePage.vue'),
  },
  {
    path: '/stock',
    name: 'Print',
    component:()=>import('@/views/PringPage.vue')
  },
  {
    path: '/plus',
    name: 'Higher',
    component:()=>import('@/views/HigherPage.vue')
  },
  {
    path: '/stockvideo',
    name: 'Video',
    component:()=>import('@/views/VideoPage.vue')
  },
  {
    path: '/search',
    name: 'search',
    component:()=>import('@/views/SearchPage.vue')
  },
  {
    path: '/GoodsDetail',
    name: 'GoodsDetail',
    component:()=>import('@/views/GoodsDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
