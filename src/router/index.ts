import { createRouter, createWebHistory } from 'vue-router'
import VUsersPage from '@/pages/users/VUsersPage.vue'
export const routes = [

    {
      path: '/',
      name: 'users',
      component: VUsersPage,
      meta:{
      layout:'main-layout'
      ,label:'Users'
      ,title:"Users"
    },
    },
  ]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
