<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const products = [
  {
    id: 1,
    name: 'Notebook Gamer RTX',
    price: 4500
  },
  {
    id: 2,
    name: 'Mouse RGB',
    price: 250
  },
  {
    id: 3,
    name: 'Teclado Mecânico',
    price: 500
  },
  {
    id: 4,
    name: 'Monitor UltraWide 34"',
    price: 2899
  },
  {
    id: 5,
    name: 'Headset Gamer Wireless',
    price: 799
  },
  {
    id: 6,
    name: 'iPhone 15 Pro Max',
    price: 8999
  },
  {
    id: 7,
    name: 'Apple Watch Series 9',
    price: 3499
  },
  {
    id: 8,
    name: 'PlayStation 5',
    price: 4299
  },
  {
    id: 9,
    name: 'Xbox Series X',
    price: 3999
  },
  {
    id: 10,
    name: 'Cadeira Gamer Premium',
    price: 1599
  },
  {
    id: 11,
    name: 'SSD NVMe 1TB',
    price: 699
  },
  {
    id: 12,
    name: 'Placa de Vídeo RTX 4070',
    price: 5299
  },
  {
    id: 13,
    name: 'Smart TV 65" 4K',
    price: 3799
  },
  {
    id: 14,
    name: 'MacBook Pro M3',
    price: 12499
  },
  {
    id: 15,
    name: 'AirPods Pro 2',
    price: 1899
  },
  {
    id: 16,
    name: 'Tablet Galaxy Tab S9',
    price: 4599
  },
  {
    id: 17,
    name: 'Câmera DSLR Canon',
    price: 6799
  },
  {
    id: 18,
    name: 'Drone DJI Mini',
    price: 5499
  },
  {
    id: 19,
    name: 'Echo Dot Alexa',
    price: 399
  },
  {
    id: 20,
    name: 'Roteador Gamer Wi-Fi 6',
    price: 1299
  }
]
</script>

<template>
  <div class="p-6">

    <!-- Título -->
    <div class="mb-8">

      <h1 class="text-4xl font-extrabold text-slate-800">
        Produtos
      </h1>

      <p class="text-gray-500 text-lg mt-2">
        Gerencie todos os produtos cadastrados na loja
      </p>

    </div>

    <!-- Card -->
    <div
      class="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
    >

      <!-- Header -->
      <div
        class="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-slate-50"
      >

        <div>

          <h2 class="text-2xl font-bold text-slate-800">
            Lista de Produtos
          </h2>

          <p class="text-gray-500 mt-1">
            Total de {{ products.length }} produtos
          </p>

        </div>

        <button
          class="bg-blue-500 hover:bg-blue-600 transition text-white font-bold px-6 py-3 rounded-2xl shadow-lg"
        >
          + Novo Produto
        </button>

      </div>

      <!-- Tabela -->
      <DataTable
        :value="products"
        paginator
        :rows="8"
        responsiveLayout="scroll"
        tableStyle="min-width: 60rem"
        class="p-datatable-lg"
      >

        <!-- ID -->
        <Column
          field="id"
          header="ID"
        />

        <!-- Produto -->
        <Column
          field="name"
          header="Produto"
        />

        <!-- Preço -->
        <Column
          field="price"
          header="Preço"
        >

          <template #body="slotProps">

            <span class="font-bold text-green-600">
              R$ {{ slotProps.data.price.toLocaleString('pt-BR') }}
            </span>

          </template>

        </Column>

        <!-- Status -->
        <Column
          header="Status"
        >

          <template #body>

            <span
              class="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold"
            >
              Ativo
            </span>

          </template>

        </Column>

        <!-- Ações -->
        <Column
          header="Ações"
        >

          <template #body>

            <div class="flex gap-3">

              <button
                class="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-xl font-semibold"
              >
                Editar
              </button>

              <button
                class="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-xl font-semibold"
              >
                Excluir
              </button>

            </div>

          </template>

        </Column>

      </DataTable>

    </div>

  </div>
</template>