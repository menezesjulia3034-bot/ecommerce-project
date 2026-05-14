import { defineStore } from 'pinia'

interface User {
  name: string
  email: string
  role: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean

  users: Array<{
    name: string
    email: string
    password: string
    role: string
  }>
}

export const useAuthStore = defineStore('auth', {

  state: (): AuthState => ({

    user: null,

    token: null,

    isAuthenticated: false,

    loading: false,

    users: JSON.parse(
      localStorage.getItem('users') || '[]'
    )

  }),

  actions: {

    // 🔥 Inicializa auth salva
    init() {

      const savedUser =
        localStorage.getItem('auth_user')

      const savedToken =
        localStorage.getItem('auth_token')

      if (savedUser && savedToken) {

        this.user = JSON.parse(savedUser)

        this.token = savedToken

        this.isAuthenticated = true

      }

    },

    // 🔐 LOGIN
    async login(
      email: string,
      password: string
    ) {

      this.loading = true

      await new Promise(resolve =>
        setTimeout(resolve, 1500)
      )

      // procura usuário salvo
      let existingUser =
        this.users.find(user =>
          user.email === email &&
          user.password === password
        )

      // 🔥 login admin fixo
      if (
        email === 'admin@email.com' &&
        password === '123456'
      ) {

        existingUser = {
          name: 'Administrador',
          email: 'admin@email.com',
          password: '123456',
          role: 'ADMIN'
        }

      }

      if (!existingUser) {

        this.loading = false

        throw new Error(
          'Credenciais inválidas'
        )

      }

      this.user = {
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role
      }

      this.token = 'fake-jwt-token'

      this.isAuthenticated = true

      // salva auth
      localStorage.setItem(
        'auth_user',
        JSON.stringify(this.user)
      )

      localStorage.setItem(
        'auth_token',
        this.token
      )

      this.loading = false

    },

    // 📝 REGISTER
    async register(
      name: string,
      email: string,
      password: string
    ) {

      this.loading = true

      await new Promise(resolve =>
        setTimeout(resolve, 1500)
      )

      // verifica email existente
      const userExists =
        this.users.some(
          user => user.email === email
        )

      if (userExists) {

        this.loading = false

        throw new Error(
          'E-mail já cadastrado'
        )

      }

      // cria usuário
      const newUser = {
        name,
        email,
        password,
        role: 'USER'
      }

      // adiciona na lista
      this.users.push(newUser)

      // salva usuários
      localStorage.setItem(
        'users',
        JSON.stringify(this.users)
      )

      // login automático
      this.user = {
        name,
        email,
        role: 'USER'
      }

      this.token = 'fake-register-token'

      this.isAuthenticated = true

      // salva auth
      localStorage.setItem(
        'auth_user',
        JSON.stringify(this.user)
      )

      localStorage.setItem(
        'auth_token',
        this.token
      )

      this.loading = false

    },

    // 🚪 LOGOUT
    logout() {

      this.user = null

      this.token = null

      this.isAuthenticated = false

      localStorage.removeItem('auth_user')

      localStorage.removeItem('auth_token')

    }

  }

})