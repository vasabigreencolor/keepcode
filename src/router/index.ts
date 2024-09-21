import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/infrastructure/consts/routes'
import HomePage from '@/views/home-page.vue'

const id = ':id'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.home,
      name: 'home',
      component: HomePage
    },
    {
      path: routes.studentList,
      name: 'student',
      component: () => import('../views/student/list-page.vue'),
      children: [
        {
          path: routes.studentDocs(id),
          name: 'student-docs',
          component: () => import('../views/student/document-page.vue'),
        }
      ]
    }
  ]
})

export default router
