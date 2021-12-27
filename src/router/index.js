import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => import('modules/home'),
    },
    {
      path: '/pageOne',
      component: () => import('modules/pageOne'),
    },
    {
      path: '/pageTwo',
      component: () => import('modules/pageTwo'),
    },
  ],
})

export default router
