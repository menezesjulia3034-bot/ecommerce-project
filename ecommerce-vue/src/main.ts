import { createApp } from 'vue'

import App from './App.vue'
import './style.css'

import router from './router'

import { createPinia } from 'pinia'

// PrimeVue
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

// CSS
import 'primeicons/primeicons.css'

const app = createApp(App)

// Pinia
const pinia = createPinia()

app.use(pinia)

// PrimeVue
app.use(PrimeVue)

app.use(ToastService)

// Router
app.use(router)

// 🔥 Auth persistente
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()

auth.init()

app.mount('#app')