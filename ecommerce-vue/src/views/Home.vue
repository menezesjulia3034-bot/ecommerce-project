<script setup lang="ts">
import { ref, computed } from 'vue'

import { useFavoritesStore } from '../stores/favorites'

import { useCartStore } from '../stores/cart'

const favorites = useFavoritesStore()

const cart = useCartStore()

const search = ref('')

const selectedCategory = ref('Todos')

const sortOption = ref('default')

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 8999,
    category: 'Celulares',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
  },
  {
    id: 2,
    name: 'Notebook Gamer RTX',
    price: 6599,
    category: 'Computadores',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
  },
  {
    id: 3,
    name: 'Smart TV 55 Polegadas',
    price: 3299,
    category: 'TVs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6'
  },
  {
    id: 4,
    name: 'Headset Gamer RGB',
    price: 399,
    category: 'Acessórios',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90'
  },
  {
    id: 5,
    name: 'Mouse Gamer',
    price: 249,
    category: 'Acessórios',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db'
  },
  {
    id: 6,
    name: 'Teclado Mecânico',
    price: 499,
    category: 'Acessórios',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae'
  },
  {
    id: 7,
    name: 'Monitor Ultrawide',
    price: 2199,
    category: 'Monitores',
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc'
  },
  {
    id: 8,
    name: 'Apple Watch',
    price: 2599,
    category: 'Smartwatch',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d'
  },
  {
    id: 9,
    name: 'Tablet Samsung',
    price: 1899,
    category: 'Tablets',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0'
  },
  {
    id: 10,
    name: 'Cadeira Gamer',
    price: 1499,
    category: 'Móveis',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8'
  }
]

const categories = [
  'Todos',
  'Celulares',
  'Computadores',
  'TVs',
  'Acessórios',
  'Monitores',
  'Smartwatch',
  'Tablets',
  'Móveis'
]

const filteredProducts = computed(() => {

  let filtered = [...products]

  // busca
  if (search.value) {

    filtered = filtered.filter(product =>
      product.name
        .toLowerCase()
        .includes(search.value.toLowerCase())
    )

  }

  // categoria
  if (selectedCategory.value !== 'Todos') {

    filtered = filtered.filter(product =>
      product.category === selectedCategory.value
    )

  }

  // ordenação
  if (sortOption.value === 'priceAsc') {

    filtered.sort((a, b) => a.price - b.price)

  }

  else if (sortOption.value === 'priceDesc') {

    filtered.sort((a, b) => b.price - a.price)

  }

  return filtered

})
</script>

<template>
  <div class="space-y-10">

    <!-- HERO -->
    <section
      class="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white p-12 shadow-2xl"
    >

      <!-- Blur -->
      <div
        class="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full -top-40 -left-40"
      ></div>

      <div
        class="absolute w-[400px] h-[400px] bg-cyan-400 opacity-20 blur-3xl rounded-full bottom-[-150px] right-[-120px]"
      ></div>

      <div class="relative z-10">

        <span
          class="bg-blue-500/20 border border-blue-400 text-blue-300 px-5 py-2 rounded-full text-sm font-bold"
        >
          🚀 Tecnologia Premium
        </span>

        <h1
          class="text-6xl font-extrabold leading-tight mt-6 max-w-3xl"
        >
          Os melhores produtos de tecnologia em um só lugar
        </h1>

        <p
          class="text-xl text-slate-300 mt-6 max-w-2xl"
        >
          Smartphones, notebooks, acessórios gamers e muito mais com entrega rápida e segurança total.
        </p>

      </div>

    </section>

    <!-- FILTROS -->
    <section
      class="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8"
    >

      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >

        <!-- Busca -->
        <div>

          <label
            class="block text-lg font-bold text-slate-700 mb-3"
          >
            Buscar Produto
          </label>

          <input
            v-model="search"
            type="text"
            placeholder="Digite o nome do produto..."
            class="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg outline-none focus:border-blue-400"
          />

        </div>

        <!-- Categoria -->
        <div>

          <label
            class="block text-lg font-bold text-slate-700 mb-3"
          >
            Categoria
          </label>

          <select
            v-model="selectedCategory"
            class="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg outline-none focus:border-blue-400"
          >

            <option
              v-for="category in categories"
              :key="category"
            >
              {{ category }}
            </option>

          </select>

        </div>

        <!-- Ordenação -->
        <div>

          <label
            class="block text-lg font-bold text-slate-700 mb-3"
          >
            Ordenar
          </label>

          <select
            v-model="sortOption"
            class="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg outline-none focus:border-blue-400"
          >

            <option value="default">
              Padrão
            </option>

            <option value="priceAsc">
              Menor preço
            </option>

            <option value="priceDesc">
              Maior preço
            </option>

          </select>

        </div>

      </div>

    </section>

    <!-- INFO -->
    <div
      class="flex items-center justify-between"
    >

      <h2
        class="text-4xl font-extrabold text-slate-800"
      >
        Produtos em Destaque
      </h2>

      <span
        class="bg-blue-100 text-blue-700 px-5 py-3 rounded-2xl font-bold"
      >
        {{ filteredProducts.length }} produtos encontrados
      </span>

    </div>

    <!-- GRID -->
    <section
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >

      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
      >

        <!-- Imagem -->
        <div class="relative overflow-hidden">

          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />

          <!-- Categoria -->
          <div
            class="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-slate-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            {{ product.category }}
          </div>

          <!-- Favorito -->
          <button
            @click="favorites.toggleFavorite(product)"
            class="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition"
          >

            <span
              v-if="favorites.isFavorite(product.id)"
              class="animate-pulse"
            >
              ❤️
            </span>

            <span v-else>
              🤍
            </span>

          </button>

        </div>

        <!-- Conteúdo -->
        <div class="p-6">

          <h2
            class="text-2xl font-bold text-slate-800 mb-4"
          >
            {{ product.name }}
          </h2>

          <!-- Avaliação -->
          <div
            class="flex items-center gap-2 mb-5"
          >

            <div class="text-yellow-400 text-xl">
              ★★★★★
            </div>

            <span class="text-gray-500">
              4.9
            </span>

          </div>

          <!-- Preço -->
          <div class="mb-6">

            <p
              class="text-4xl font-extrabold text-green-600"
            >
              R$ {{ product.price.toLocaleString('pt-BR') }}
            </p>

            <p
              class="text-gray-500 mt-2"
            >
              em até 12x sem juros
            </p>

          </div>

          <!-- Botões -->
          <div class="flex gap-3">

            <!-- Ver detalhes -->
            <router-link
              :to="`/produto/${product.id}`"
              class="flex-1 text-center bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-[1.02] transition text-white font-bold py-4 rounded-2xl shadow-xl"
            >
              Ver detalhes
            </router-link>

            <!-- Carrinho -->
            <button
              @click="cart.addToCart(product)"
              class="w-16 rounded-2xl bg-green-500 hover:bg-green-600 text-white text-2xl shadow-xl transition hover:scale-105"
            >
              🛒
            </button>

          </div>

        </div>

      </div>

    </section>

  </div>
</template>