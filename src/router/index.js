import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes = [
  {
    path: '/add-photo',
    name: 'AddPhotoPage',
    component: () => import('@/pages/AddPhotoPage.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
    children: [
      {
        path: ':photoId',
        name: 'HomeSinglePhotoPage',
        component: () => import('@/pages/SinglePhotoPage.vue')
      }
    ]
  },
  {
    path: '/photos/:category',
    name: 'CategoryPhotosPage',
    component: () => import('@/pages/CategoryPhotosPage.vue'),
    children: [
      {
        path: ':photoId',
        name: 'CategorySinglePhotoPage',
        component: () => import('@/pages/SinglePhotoPage.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
