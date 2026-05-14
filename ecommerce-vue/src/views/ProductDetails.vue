<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const cep = ref('')
const frete = ref<number | null>(null)

function calcularFrete() {
  if (cep.value.length >= 8) {
    frete.value = 24.90
  }
}

const parcelas = [
  '1x de R$ 8.999 sem juros',
  '2x de R$ 4.499,50 sem juros',
  '3x de R$ 2.999,66 sem juros',
  '6x de R$ 1.499,83 sem juros',
  '12x de R$ 749,91 sem juros'
]
</script>

<template>
  <div class="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

      <!-- Fotos -->
      <div>

        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          class="rounded-2xl w-full h-[450px] object-cover mb-4"
        />

        <div class="grid grid-cols-3 gap-4">

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            class="rounded-xl h-32 w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
            class="rounded-xl h-32 w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd"
            class="rounded-xl h-32 w-full object-cover"
          />

        </div>

      </div>

      <!-- Informações -->
      <div>

        <h1 class="text-4xl font-bold mb-5 text-slate-800">
          iPhone 15 Pro Max - Produto {{ route.params.id }}
        </h1>

        <p class="text-yellow-500 text-2xl mb-4">
          ⭐⭐⭐⭐⭐ 4.9 (2.345 avaliações)
        </p>

        <p class="text-green-600 text-5xl font-bold mb-6">
          R$ 8.999
        </p>

        <p class="text-slate-600 leading-8 mb-6 text-lg">
          Smartphone premium Apple com câmera profissional,
          tela Super Retina XDR, desempenho extremamente rápido,
          bateria de longa duração e acabamento em titânio.
        </p>

        <!-- Benefícios -->
        <div class="bg-gray-100 rounded-2xl p-5 space-y-4 mb-8 text-lg text-slate-700">
          <p>✅ Frete grátis para todo o Brasil</p>
          <p>✅ Entrega em até 3 dias úteis</p>
          <p>✅ Garantia de 12 meses</p>
          <p>✅ Parcelamento em até 12x sem juros</p>
        </div>

        <!-- Parcelamento -->
        <div class="mb-8">

          <h2 class="text-2xl font-bold mb-4 text-slate-800">
            Opções de Parcelamento
          </h2>

          <select
            class="w-full border-2 border-gray-300 rounded-xl p-4 text-lg"
          >
            <option
              v-for="parcela in parcelas"
              :key="parcela"
            >
              {{ parcela }}
            </option>
          </select>

        </div>

        <!-- Calcular frete -->
        <div class="mb-8">

          <h2 class="text-2xl font-bold mb-4 text-slate-800">
            Calcular Frete
          </h2>

          <div class="flex gap-4">

            <input
              v-model="cep"
              type="text"
              placeholder="Digite seu CEP"
              class="flex-1 border-2 border-gray-300 rounded-xl p-4"
            />

            <button
              @click="calcularFrete"
              class="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl font-bold transition"
            >
              Calcular
            </button>

          </div>

          <p
            v-if="frete"
            class="mt-4 text-xl text-green-600 font-bold"
          >
            Frete calculado: R$ {{ frete }}
          </p>

        </div>

        <button
          class="bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-bold px-8 py-4 rounded-2xl transition w-full"
        >
          Adicionar ao carrinho
        </button>

      </div>

    </div>

  </div>
</template>