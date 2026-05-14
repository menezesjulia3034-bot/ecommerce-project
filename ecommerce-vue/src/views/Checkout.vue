<script setup lang="ts">
import { ref, computed } from 'vue'

const cep = ref('')

const shippingCalculated = ref(false)

const shippingPrice = ref(0)

const selectedInstallment = ref(
  '12x de R$ 749,91 sem juros'
)

const cartItems = ref([
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    color: 'Titânio Natural',
    price: 8999,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
  },

  {
    id: 2,
    name: 'Apple Watch',
    color: 'Preto Espacial',
    price: 2599,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d'
  }
])

function increaseQuantity(item: any) {

  item.quantity++

}

function decreaseQuantity(item: any) {

  if (item.quantity > 1) {

    item.quantity--

  }

}

function removeItem(id: number) {

  cartItems.value =
    cartItems.value.filter(
      item => item.id !== id
    )

}

function calculateShipping() {

  if (!cep.value) return

  shippingCalculated.value = true

  shippingPrice.value = 0

}

const subtotal = computed(() => {

  return cartItems.value.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

})

const totalItems = computed(() => {

  return cartItems.value.reduce(
    (total, item) =>
      total + item.quantity,
    0
  )

})

const total = computed(() => {

  return subtotal.value + shippingPrice.value

})
</script>

<template>
  <div class="max-w-7xl mx-auto">

    <!-- CARRINHO VAZIO -->
    <div
      v-if="cartItems.length === 0"
      class="bg-white rounded-[40px] shadow-2xl p-16 text-center border border-gray-200"
    >

      <div class="text-8xl mb-8">
        🛒
      </div>

      <h1
        class="text-5xl font-extrabold text-slate-800 mb-6"
      >
        Seu carrinho está vazio
      </h1>

      <p
        class="text-2xl text-gray-500 mb-10"
      >
        Adicione produtos para continuar sua compra
      </p>

      <router-link
        to="/"
        class="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-2xl text-2xl font-bold shadow-xl hover:scale-105 transition"
      >
        Continuar Comprando
      </router-link>

    </div>

    <!-- CARRINHO -->
    <div
      v-else
      class="grid lg:grid-cols-3 gap-8"
    >

      <!-- PRODUTOS -->
      <div class="lg:col-span-2 space-y-6">

        <div
          class="bg-white rounded-3xl shadow-xl p-8 border border-gray-200"
        >

          <!-- Título -->
          <div
            class="flex items-center justify-between mb-10"
          >

            <div>

              <h1
                class="text-4xl font-extrabold text-slate-800"
              >
                Carrinho de Compras
              </h1>

              <p
                class="text-gray-500 mt-2 text-lg"
              >
                {{ totalItems }} itens no carrinho
              </p>

            </div>

            <div
              class="bg-blue-100 text-blue-700 px-5 py-3 rounded-2xl font-bold"
            >
              {{ cartItems.length }} produtos
            </div>

          </div>

          <!-- LISTA -->
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="border-b border-gray-200 pb-8 mb-8 last:border-0 last:mb-0"
          >

            <div
              class="flex flex-col xl:flex-row gap-8"
            >

              <!-- IMAGEM -->
              <img
                :src="item.image"
                class="w-full xl:w-72 h-72 object-cover rounded-3xl shadow-lg"
              />

              <!-- INFO -->
              <div class="flex-1">

                <div
                  class="flex flex-col md:flex-row md:items-start md:justify-between gap-5"
                >

                  <div>

                    <h2
                      class="text-3xl font-bold text-slate-800"
                    >
                      {{ item.name }}
                    </h2>

                    <p
                      class="text-gray-500 text-lg mt-3"
                    >
                      Cor: {{ item.color }}
                    </p>

                  </div>

                  <button
                    @click="removeItem(item.id)"
                    class="bg-red-50 hover:bg-red-100 text-red-600 px-5 py-3 rounded-2xl font-bold transition"
                  >
                    🗑 Remover
                  </button>

                </div>

                <!-- Avaliação -->
                <div
                  class="flex items-center gap-3 mt-5"
                >

                  <div class="flex text-yellow-400 text-2xl">
                    ★★★★★
                  </div>

                  <span class="text-gray-500 text-lg">
                    4.9 (2.341 avaliações)
                  </span>

                </div>

                <!-- Benefícios -->
                <div
                  class="mt-8 grid md:grid-cols-2 gap-4"
                >

                  <div
                    class="bg-green-50 border border-green-200 text-green-700 p-4 rounded-2xl font-semibold"
                  >
                    ✅ Frete grátis
                  </div>

                  <div
                    class="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded-2xl font-semibold"
                  >
                    ✅ Entrega rápida
                  </div>

                  <div
                    class="bg-purple-50 border border-purple-200 text-purple-700 p-4 rounded-2xl font-semibold"
                  >
                    ✅ Garantia de 12 meses
                  </div>

                  <div
                    class="bg-orange-50 border border-orange-200 text-orange-700 p-4 rounded-2xl font-semibold"
                  >
                    ✅ 12x sem juros
                  </div>

                </div>

                <!-- QUANTIDADE -->
                <div
                  class="mt-8 flex items-center justify-between flex-wrap gap-6"
                >

                  <div>

                    <label
                      class="block text-lg font-bold text-slate-700 mb-3"
                    >
                      Quantidade
                    </label>

                    <div
                      class="flex items-center gap-4"
                    >

                      <button
                        @click="decreaseQuantity(item)"
                        class="w-14 h-14 rounded-2xl bg-gray-100 hover:bg-gray-200 text-2xl font-bold transition"
                      >
                        -
                      </button>

                      <div
                        class="w-16 text-center text-2xl font-bold"
                      >
                        {{ item.quantity }}
                      </div>

                      <button
                        @click="increaseQuantity(item)"
                        class="w-14 h-14 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold transition"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <!-- PREÇO -->
                  <div
                    class="text-right"
                  >

                    <p
                      class="text-gray-500 text-lg"
                    >
                      Valor total
                    </p>

                    <p
                      class="text-4xl font-extrabold text-green-600"
                    >
                      R$
                      {{
                        (
                          item.price *
                          item.quantity
                        ).toLocaleString('pt-BR')
                      }}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <!-- FRETE -->
          <div
            class="mt-8 bg-slate-50 rounded-3xl p-6 border border-gray-200"
          >

            <h3
              class="text-2xl font-bold text-slate-800 mb-5"
            >
              Calcular Frete
            </h3>

            <div
              class="flex flex-col md:flex-row gap-4"
            >

              <input
                v-model="cep"
                placeholder="Digite seu CEP"
                class="flex-1 border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg outline-none focus:border-blue-400"
              />

              <button
                @click="calculateShipping"
                class="bg-blue-500 hover:bg-blue-600 transition text-white font-bold px-8 py-4 rounded-2xl shadow-lg"
              >
                Calcular
              </button>

            </div>

            <div
              v-if="shippingCalculated"
              class="mt-5 bg-green-50 border border-green-200 text-green-700 p-5 rounded-2xl text-lg font-semibold"
            >
              🚚 Frete grátis disponível para sua região!
            </div>

          </div>

        </div>

      </div>

      <!-- RESUMO -->
      <div>

        <div
          class="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 sticky top-28"
        >

          <h2
            class="text-3xl font-extrabold text-slate-800 mb-8"
          >
            Resumo do Pedido
          </h2>

          <div class="space-y-5 text-lg">

            <div class="flex justify-between">
              <span>Subtotal</span>

              <span>
                R$
                {{ subtotal.toLocaleString('pt-BR') }}
              </span>
            </div>

            <div class="flex justify-between">
              <span>Itens</span>

              <span>
                {{ totalItems }}
              </span>
            </div>

            <div class="flex justify-between">
              <span>Frete</span>

              <span class="text-green-600 font-bold">
                Grátis
              </span>
            </div>

            <div class="flex justify-between">
              <span>Parcelamento</span>

              <span class="text-right text-sm text-gray-500 max-w-[180px]">
                {{ selectedInstallment }}
              </span>
            </div>

          </div>

          <!-- PARCELAMENTO -->
          <div class="mt-8">

            <label
              class="block text-lg font-bold text-slate-700 mb-3"
            >
              Escolha o Parcelamento
            </label>

            <select
              v-model="selectedInstallment"
              class="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg outline-none focus:border-blue-400"
            >

              <option>
                À vista
                R$
                {{ total.toLocaleString('pt-BR') }}
              </option>

              <option>
                2x sem juros
              </option>

              <option>
                4x sem juros
              </option>

              <option>
                6x sem juros
              </option>

              <option>
                12x sem juros
              </option>

            </select>

          </div>

          <!-- TOTAL -->
          <div
            class="border-t border-gray-200 mt-8 pt-8 flex justify-between items-center"
          >

            <h2
              class="text-3xl font-bold text-slate-800"
            >
              Total
            </h2>

            <p
              class="text-4xl font-extrabold text-green-600"
            >
              R$
              {{ total.toLocaleString('pt-BR') }}
            </p>

          </div>

          <!-- BOTÃO -->
          <button
            class="w-full mt-8 bg-gradient-to-r from-green-500 to-green-600 hover:scale-[1.02] transition text-white py-5 rounded-2xl text-2xl font-bold shadow-2xl"
          >
            Finalizar Compra
          </button>

          <!-- SEGURANÇA -->
          <div
            class="mt-6 bg-slate-50 rounded-2xl p-5 border border-gray-200"
          >

            <div class="flex items-center gap-3">

              <span class="text-2xl">
                🔒
              </span>

              <div>

                <p class="font-bold text-slate-700">
                  Compra 100% Segura
                </p>

                <p class="text-sm text-gray-500">
                  Seus dados protegidos com criptografia SSL
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>