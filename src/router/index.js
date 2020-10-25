import Vue from 'vue'
import VueRouter from 'vue-router'
import { LoginMiddleware, ChatMiddleware } from './middleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: () => import('../pages/Chat.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name == 'Chat') {
    return ChatMiddleware(to, from, next)
  } else if (to.name == 'Login') {
    return LoginMiddleware(to, from, next)
  }
  
  return next()
})

export default router
