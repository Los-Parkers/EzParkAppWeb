import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/landing-page/pages/index.page.vue'

import FindYourParkPage from '@/public/pages/find-your-park.page.vue'
import RegisterPark from '@/public/pages/register-park.page.vue'
import NotFoundPage from '@/public/pages/not-found.page.vue'

import ParkingDetailPage from '@/parkings/pages/parking-detail.page.vue'

import LogInPage from '@/auth/pages/login-page.component.vue'
import SignUpPage from '@/auth/pages/signup-page.component.vue'
import RecoveryPage from '@/auth/pages/recovery.page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/login',
      component: LogInPage
    },
    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/recovery',
      component: RecoveryPage
    },
    {
      path: '/find-your-park',
      component: FindYourParkPage
    },
    {
      path: '/find-your-park/parking/:id',
      component: ParkingDetailPage
    },
    {
      path: '/register-park',
      component: RegisterPark
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage
    }
  ]
})

export default router
