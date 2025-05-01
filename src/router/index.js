import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import SignupPage from '../components/SignupPage.vue'
import DashboardLayout from '../components/DashboardLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('../components/Dashboard.vue')
      },
      {
        path: '/income',
        name: 'Income',
        component: () => import('../components/Income.vue')
      },
      {
        path: '/expenses',
        name: 'Expenses',
        component: () => import('../components/Expenses.vue')
      },
      {
        path: '/bills',
        name: 'Bills',
        component: () => import('../components/Bills.vue')
      },
      {
        path: '/debt',
        name: 'Debt',
        component: () => import('../components/Debt.vue')
      },
      {
        path: '/savings',
        name: 'Savings',
        component: () => import('../components/Savings.vue')
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('../components/Settings.vue')
      }
    ]
  },
  // Redirect any unknown routes to login
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 