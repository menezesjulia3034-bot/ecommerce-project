<template>

<div class="card">

<h3>{{ product.name }}</h3>

<p>Categoria: {{ product.category.title }}</p>

<p>Preço: R$ {{ product.price }}</p>

<button @click="$emit('add-product', product)">
Adicionar
</button>

</div>

</template>

<script lang="ts">

import { defineComponent, PropType } from "vue"
import type { Product } from "../models/Product"

export default defineComponent({

props:{
product:{
type:Object as PropType<Product>,
required:true
}
}

})

</script>

<style>

.card{
border:1px solid #ccc;
padding:10px;
border-radius:8px;
width:150px;
}

</style>