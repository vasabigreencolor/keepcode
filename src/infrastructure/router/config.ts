import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/infrastructure/consts/routes'
import HomePage from '@/views/home-page.vue'

const id = ':id'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.home,
      component: HomePage,
      meta: {
        layout: 'MainLayout',
      },
    },
    {
      path: routes.studentList,
      component: () => import('@/views/student/list-page.vue'),
      meta: {
        layout: 'MainLayout',
      },
      children: [
        {
          path: routes.studentDocs(id),
          component: () => import('@/views/student/document-page.vue'),
          meta: {
            layout: 'MainLayout',
          },
        }
      ]
    }
  ]
})
