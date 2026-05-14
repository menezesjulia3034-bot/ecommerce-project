<template>
  <div class="bg-white p-4 rounded-2xl shadow-lg hover:scale-105 transition">
    <h3 class="text-lg font-semibold">{{ product.name }}</h3>
    <p class="text-gray-600 mb-4">R$ {{ product.price }}</p>

    <button
      class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      @click="$emit('add', product)"
    >
      Adicionar ao carrinho
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Product } from "../models/Product";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>