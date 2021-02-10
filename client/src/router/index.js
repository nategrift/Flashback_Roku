import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import SignUp from '../pages/SignUp.vue'
import Login from '../pages/Login.vue'
import Profiles from '../pages/Profiles.vue'
import Media from '../pages/Media.vue'
import NotFound from '../pages/404.vue'

import store from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUp,
    meta: {requiresNoAuth: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {requiresNoAuth: true}
  },
  {
    path: '/profiles',
    name: 'Profiles',
    component: Profiles,
    meta: {requiresAuth: true}
  },
  {
    path: '/media',
    name: 'Media',
    component: Media,
    meta: {requiresAuth: true, requiresProfile: true}
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

router.beforeEach(function(to, from, next) {
  if (to.meta.requiresProfile && !store.getters.hasProfileSelected) {
    if (store.getters.isAuthenticated) {
      next('/profiles')
    } else {
      next('/login');
    }
  } else if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else if (to.meta.requiresNoAuth && store.getters.isAuthenticated) {
    next('/profiles');
  } else {
    next();
  }
})

export default router
