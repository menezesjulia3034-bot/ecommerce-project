import { defineStore } from 'pinia'

interface FavoriteProduct {
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface FavoritesState {
  items: FavoriteProduct[]
}

export const useFavoritesStore = defineStore('favorites', {

  state: (): FavoritesState => ({

    items: JSON.parse(
      localStorage.getItem('favorites') || '[]'
    )

  }),

  getters: {

    favoritesCount: (state) => state.items.length

  },

  actions: {

    toggleFavorite(product: FavoriteProduct) {

      const exists = this.items.find(
        item => item.id === product.id
      )

      if (exists) {

        this.items = this.items.filter(
          item => item.id !== product.id
        )

      } else {

        this.items.push(product)

      }

      localStorage.setItem(
        'favorites',
        JSON.stringify(this.items)
      )

    },

    isFavorite(productId: number) {

      return this.items.some(
        item => item.id === productId
      )

    }

  }

})