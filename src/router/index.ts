import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '@/components/Layout/DashBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: DashBoard,
          props: true
        }
      ]
    }
  ]
})

export default router
