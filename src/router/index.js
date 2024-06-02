import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/photos/:category',
    name: 'CategoryPhotosPage',
    component: () => import('@/pages/CategoryPhotosPage.vue')
  },
  {
    path: '/add-photo',
    name: 'AddPhotoPAge',
    component: () => import('@/pages/AddPhotoPage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
