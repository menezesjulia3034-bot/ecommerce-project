import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import ConsumerLayout from '../layouts/ConsumerLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

// Views consumidor
import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Checkout from '../views/Checkout.vue'

// Views admin
import AdminProducts from '../views/admin/AdminProducts.vue'
import AdminReports from '../views/admin/AdminReports.vue'

// 🔥 Pinia store
import { useAuthStore } from '../stores/auth'

const routes = [

  // Área do consumidor
  {
    path: '/',
    component: ConsumerLayout,

    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },

      {
        path: 'produto/:id',
        name: 'product-details',
        component: ProductDetails,
        props: true
      },

      {
        path: 'checkout',
        name: 'checkout',
        component: Checkout
      },

      {
        path: 'login',
        name: 'login',
        component: Login
      },

      {
        path: 'register',
        name: 'register',
        component: Register
      }
    ]
  },

  // Área administrativa
  {
    path: '/admin',
    component: AdminLayout,

    children: [
      {
        path: 'produtos',
        name: 'admin-products',
        component: AdminProducts
      },

      {
        path: 'relatorios',
        name: 'admin-reports',
        component: AdminReports
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/* 🔥 GUARD GLOBAL DE AUTENTICAÇÃO */
router.beforeEach((to, from, next) => {

  const auth = useAuthStore()

  const isAuthenticated = auth.isAuthenticated
  const userRole = auth.user?.role || 'USER'

  // 🔐 PROTEÇÃO: checkout
  if (to.name === 'checkout' && !isAuthenticated) {

    alert('Você precisa estar logado para acessar o checkout.')

    return next({
      name: 'login',
      query: { redirect: to.fullPath }
    })
  }

  // 🔐 PROTEÇÃO: área admin
  if (to.path.startsWith('/admin')) {

    if (!isAuthenticated || userRole !== 'ADMIN') {

      alert('Acesso negado.')

      return next({ name: 'home' })
    }
  }

  // 🔁 se já estiver logado, não pode ir para login/register
  if ((to.name === 'login' || to.name === 'register') && isAuthenticated) {

    return next({ name: 'home' })
  }

  next()
})

export default router