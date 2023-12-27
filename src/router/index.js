import { createRouter, createWebHistory } from 'vue-router'
import BalanceView from '../views/BalanceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'balance',
      component: BalanceView
    },
    {
      path: '/recarga',
      name: 'recarga',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProvidersView.vue')
    }
  ]
})

export default router
