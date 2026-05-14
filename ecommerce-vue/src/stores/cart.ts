import { defineStore } from 'pinia'

export interface CartProduct {
  id: number
  name: string
  price: number
  image: string
  category: string
  quantity: number
}

interface CartState {
  items: CartProduct[]
}

export const useCartStore = defineStore('cart', {

  state: (): CartState => ({

    items: JSON.parse(
      localStorage.getItem('cart') || '[]'
    )

  }),

  getters: {

    cartCount: (state) => {

      return state.items.reduce(
        (total, item) => total + item.quantity,
        0
      )

    },

    cartTotal: (state) => {

      return state.items.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      )

    }

  },

  actions: {

    addToCart(product: Omit<CartProduct, 'quantity'>) {

      const existingProduct = this.items.find(
        item => item.id === product.id
      )

      if (existingProduct) {

        existingProduct.quantity++

      } else {

        this.items.push({
          ...product,
          quantity: 1
        })

      }

      localStorage.setItem(
        'cart',
        JSON.stringify(this.items)
      )

    },

    removeFromCart(productId: number) {

      this.items = this.items.filter(
        item => item.id !== productId
      )

      localStorage.setItem(
        'cart',
        JSON.stringify(this.items)
      )

    },

    increaseQuantity(productId: number) {

      const product = this.items.find(
        item => item.id === productId
      )

      if (product) {

        product.quantity++

      }

      localStorage.setItem(
        'cart',
        JSON.stringify(this.items)
      )

    },

    decreaseQuantity(productId: number) {

      const product = this.items.find(
        item => item.id === productId
      )

      if (!product) return

      if (product.quantity > 1) {

        product.quantity--

      } else {

        this.removeFromCart(productId)

      }

      localStorage.setItem(
        'cart',
        JSON.stringify(this.items)
      )

    }

  }

})