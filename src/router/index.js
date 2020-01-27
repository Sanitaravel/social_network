import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import Users from '../views/Users.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile/:id',
    component: Profile
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/registration',
    component: Registration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
