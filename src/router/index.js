import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoHome from '../views/TodoHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TodoHome',
    component: TodoHome
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
