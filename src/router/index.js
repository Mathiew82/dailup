import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import Stats from '../pages/Stats.vue'

export const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/stats', name: 'Stats', component: Stats },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
