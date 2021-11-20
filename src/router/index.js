import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bikeShape',
    name: 'BikeShape',
    component: () => import(/* webpackChunkName: "about" */ '../views/BikeShape.vue')
  },
  {
    path: '/scenicSpot',
    name: 'ScenicSpot',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScenicSpot.vue')
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: () => import(/* webpackChunkName: "about" */ '../views/Restaurant.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
