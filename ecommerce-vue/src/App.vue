<template>

  <h1>E-commerce 🛒</h1>

  <h2>Produtos</h2>

  <div class="products">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-product="addToCart"
    />
  </div>

  <h2>Carrinho</h2>

  <p><strong>Total de itens:</strong> {{ cart.getTotalItems() }}</p>
  <p><strong>Preço final:</strong> R$ {{ cart.getFinalPrice() }}</p>

  <table border="1" cellpadding="10">
    <tr>
      <th>Produto</th>
      <th>Quantidade</th>
      <th>Ações</th>
    </tr>

    <tr v-for="item in cart.items" :key="item.product.id">
      <td>{{ item.product.name }}</td>
      <td>{{ item.quantity }}</td>
      <td>
        <button @click="cart.removeOne(item.product.id)">-</button>
        <button @click="cart.addItem(item.product)">+</button>
        <button @click="cart.removeItem(item.product.id)">Remover</button>
      </td>
    </tr>
  </table>

</template>

<script lang="ts">

import { defineComponent } from "vue"
import ProductCard from "./components/ProductCard.vue"
import { Cart } from "./models/Cart"
import type { Product } from "./models/Product"

export default defineComponent({

  components: {
    ProductCard
  },

  data() {
    return {

      products: [
        {
          id: 1,
          name: "Notebook",
          price: 3000,
          category: { id: 1, title: "Eletrônicos" }
        },
        {
          id: 2,
          name: "Celular",
          price: 1500,
          category: { id: 1, title: "Eletrônicos" }
        },
        {
          id: 3,
          name: "Camisa",
          price: 80,
          category: { id: 2, title: "Roupas" }
        }
      ],

      cart: new Cart()

    }
  },

  methods: {

    addToCart(product: Product) {
      this.cart.addItem(product)
    }

  }

})

</script>

<style>

body {
  font-family: Arial;
  padding: 20px;
}

h1 {
  color: #333;
}

.products {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

table {
  margin-top: 10px;
  border-collapse: collapse;
}

th {
  background: #eee;
}

button {
  cursor: pointer;
  padding: 5px;
  margin: 2px;
}

</style>