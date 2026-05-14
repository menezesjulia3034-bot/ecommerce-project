<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { useRouter } from 'vue-router'

import { useAuthStore } from '../stores/auth'

const router = useRouter()

const auth = useAuthStore()

const showDropdown = ref(false)

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

function closeDropdown(event: MouseEvent) {

  const target = event.target as HTMLElement

  if (!target.closest('.user-menu')) {
    showDropdown.value = false
  }

}

function handleLogout() {

  auth.logout()

  showDropdown.value = false

  router.push('/login')

}

onMounted(() => {
  window.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropdown)
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">

    <!-- Header -->
    <header
      class="bg-slate-950 text-white shadow-2xl border-b border-slate-800 sticky top-0 z-50 backdrop-blur-xl"
    >

      <div
        class="container mx-auto flex items-center justify-between px-8 py-5"
      >

        <!-- Logo -->
        <router-link
          to="/"
          class="text-4xl font-extrabold tracking-tight hover:scale-105 transition duration-300"
        >

          <span class="text-white">
            Tech
          </span>

          <span class="text-blue-400">
            Store
          </span>

        </router-link>

        <!-- Navegação -->
        <nav
          class="flex items-center gap-8 text-lg"
        >

          <router-link
            to="/"
            class="hover:text-blue-400 transition font-semibold"
          >
            Home
          </router-link>

          <router-link
            to="/checkout"
            class="hover:text-blue-400 transition flex items-center gap-2 font-semibold"
          >
            🛒 Carrinho
          </router-link>

          <!-- NÃO LOGADO -->
          <template v-if="!auth.isAuthenticated">

            <router-link
              to="/login"
              class="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105"
            >
              Entrar
            </router-link>

            <router-link
              to="/register"
              class="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition px-6 py-3 rounded-2xl font-bold hover:scale-105"
            >
              Criar Conta
            </router-link>

          </template>

          <!-- LOGADO -->
          <template v-else>

            <div class="relative user-menu">

              <!-- Botão usuário -->
              <button
                @click="toggleDropdown"
                class="flex items-center gap-4 bg-slate-800 hover:bg-slate-700 transition px-5 py-3 rounded-2xl border border-slate-700 shadow-lg"
              >

                <!-- Avatar -->
                <div
                  class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center font-bold text-xl shadow-lg"
                >
                  {{ auth.user?.name.charAt(0).toUpperCase() }}
                </div>

                <!-- Dados -->
                <div class="text-left">

                  <p class="font-bold text-white">
                    {{ auth.user?.name }}
                  </p>

                  <p class="text-sm text-gray-400">
                    {{ auth.user?.email }}
                  </p>

                </div>

                <!-- Ícone -->
                <i
                  class="pi pi-angle-down text-gray-400"
                ></i>

              </button>

              <!-- Dropdown -->
              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
              >

                <div
                  v-if="showDropdown"
                  class="absolute right-0 mt-4 w-80 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
                >

                  <!-- Header -->
                  <div
                    class="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white"
                  >

                    <div class="flex items-center gap-4">

                      <div
                        class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold"
                      >
                        {{ auth.user?.name.charAt(0).toUpperCase() }}
                      </div>

                      <div>

                        <h3 class="text-xl font-bold">
                          {{ auth.user?.name }}
                        </h3>

                        <p class="text-blue-100 text-sm">
                          {{ auth.user?.email }}
                        </p>

                      </div>

                    </div>

                  </div>

                  <!-- Informações -->
                  <div class="p-5 space-y-4">

                    <!-- Cargo -->
                    <div
                      class="flex items-center justify-between bg-slate-100 rounded-2xl p-4"
                    >

                      <span class="font-semibold text-slate-700">
                        Tipo de conta
                      </span>

                      <span
                        class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold"
                      >
                        {{ auth.user?.role }}
                      </span>

                    </div>

                    <!-- Logout -->
                    <button
                      @click="handleLogout"
                      class="w-full bg-red-500 hover:bg-red-600 transition text-white font-bold py-4 rounded-2xl shadow-lg"
                    >
                      Sair da conta
                    </button>

                  </div>

                </div>

              </transition>

            </div>

          </template>

        </nav>

      </div>

    </header>

    <!-- Conteúdo -->
    <main class="container mx-auto p-6">

      <!-- Breadcrumb -->
      <div
        class="text-sm text-gray-500 mb-6 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200"
      >

        Home /

        {{ $route.name || 'Página' }}

      </div>

      <router-view />

    </main>

  </div>
</template>