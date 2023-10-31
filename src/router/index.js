import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/page1.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/page2.vue')
    }
  ]
})

export default router
