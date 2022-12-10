import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Company from '../views/Company.vue'
import Service from '../views/Service.vue'
import Collaboration from '../views/Collaboration.vue'
import Login from '../views/SignIn.vue'
import Register from '../views/SignUp.vue'
// import About from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/company',
    name: 'company',
    component: Company
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  {
    path: '/collaboration',
    name: 'collaboration',
    component: Collaboration
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
