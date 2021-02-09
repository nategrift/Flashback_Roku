import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import SignUp from '../pages/SignUp.vue'
import Login from '../pages/Login.vue'
import Profiles from '../pages/Profiles.vue'
import NotFound from '../pages/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profiles',
    name: 'Profiles',
    component: Profiles
  },
  {
    // Not found 404 page
    path: '/:notFound(.*)',
    name: '404',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
