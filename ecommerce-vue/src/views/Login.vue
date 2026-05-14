<script setup lang="ts">
import { reactive } from 'vue'

import { useRouter } from 'vue-router'

import { useToast } from 'primevue/usetoast'

import { useAuthStore } from '../stores/auth'

import useVuelidate from '@vuelidate/core'

import {
  required,
  email
} from '@vuelidate/validators'

import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

const router = useRouter()

const toast = useToast()

const auth = useAuthStore()

const form = reactive({
  email: '',
  password: ''
})

const rules = {
  email: {
    required,
    email
  },

  password: {
    required
  }
}

const v$ = useVuelidate(rules, form)

async function handleLogin() {

  const isValid = await v$.value.$validate()

  if (!isValid) {

    toast.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Preencha os campos corretamente',
      life: 3000
    })

    return
  }

  try {

    await auth.login(
      form.email,
      form.password
    )

    toast.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Login realizado com sucesso!',
      life: 3000
    })

    setTimeout(() => {
      router.push('/')
    }, 1000)

  } catch (error) {

    toast.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Credenciais inválidas',
      life: 3000
    })

  }

}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#031b4e] to-[#020617] p-6 overflow-hidden relative"
  >

    <!-- Toast -->
    <Toast
      position="top-center"
    />

    <!-- Fundo -->
    <div
      class="absolute w-[900px] h-[900px] rounded-full bg-blue-600 opacity-20 blur-3xl -top-60 -left-60"
    ></div>

    <div
      class="absolute w-[700px] h-[700px] rounded-full bg-blue-500 opacity-20 blur-3xl bottom-[-250px] right-[-200px]"
    ></div>

    <!-- Card -->
    <div
      class="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl px-10 py-12"
    >

      <!-- Logo -->
      <div class="text-center mb-10">

        <h1 class="text-7xl font-extrabold tracking-tight">

          <span class="text-slate-900">
            Tech
          </span>

          <span class="text-blue-600">
            Store
          </span>

        </h1>

        <p class="text-3xl text-slate-400 mt-4">
          Faça login para continuar
        </p>

      </div>

      <!-- Linha -->
      <div class="border-b border-gray-200 mb-10"></div>

      <!-- Form -->
      <div class="space-y-8">

        <!-- Email -->
        <div>

          <label
            class="block text-2xl font-bold text-slate-800 mb-4"
          >
            E-mail
          </label>

          <InputText
            v-model="form.email"
            placeholder="Digite seu e-mail"
            class="w-full text-2xl p-5 border-2 border-blue-200 rounded-2xl text-slate-800"
          />

          <small
            v-if="v$.email.$error"
            class="text-red-500 text-lg mt-2 block"
          >
            E-mail inválido
          </small>

        </div>

        <!-- Senha -->
        <div>

          <label
            class="block text-2xl font-bold text-slate-800 mb-4"
          >
            Senha
          </label>

          <Password
            v-model="form.password"
            placeholder="Digite sua senha"
            toggleMask
            :feedback="false"
            fluid
            inputClass="w-full text-2xl p-5 pr-16 text-slate-700"
            class="w-full custom-password"
          />

          <small
            v-if="v$.password.$error"
            class="text-red-500 text-lg mt-2 block"
          >
            Senha obrigatória
          </small>

        </div>

        <!-- Botão -->
        <Button
          label="Entrar"
          icon="pi pi-sign-in"
          :loading="auth.loading"
          @click="handleLogin"
          class="w-full text-3xl font-bold p-5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 border-none"
        />

      </div>

    </div>

  </div>
</template>

<style scoped>
:deep(.custom-password .p-password-input) {
  width: 100%;
  height: 85px;
  border-radius: 20px;
  border: 2px solid #bfdbfe;
  font-size: 1.5rem;
  color: #334155;
}

:deep(.custom-password .p-password-toggle-mask-icon) {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.8rem;
  color: #64748b;
}

:deep(.p-toast) {
  width: 450px;
}

:deep(.p-toast-message) {
  border-radius: 20px;
  padding: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
}

:deep(.p-toast-message-content) {
  gap: 14px;
}

:deep(.p-toast-summary) {
  font-size: 1.3rem;
  font-weight: 700;
}

:deep(.p-toast-detail) {
  font-size: 1.05rem;
  margin-top: 6px;
}
</style>