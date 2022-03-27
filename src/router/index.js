import { createWebHistory, createRouter } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import('../pages/Stats.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
