<script setup lang="ts">
const metrics = [
  {
    title: 'Vendas Totais',
    value: 'R$ 128.540',
    icon: '💰',
    color: 'bg-green-500'
  },
  {
    title: 'Pedidos',
    value: '1.284',
    icon: '📦',
    color: 'bg-blue-500'
  },
  {
    title: 'Clientes',
    value: '842',
    icon: '👥',
    color: 'bg-purple-500'
  },
  {
    title: 'Produtos',
    value: '20',
    icon: '🛒',
    color: 'bg-orange-500'
  }
]

const recentSales = [
  {
    id: 1,
    customer: 'Julia Menezes',
    product: 'iPhone 15 Pro Max',
    total: 'R$ 8.999',
    status: 'Pago'
  },
  {
    id: 2,
    customer: 'Carlos Silva',
    product: 'PlayStation 5',
    total: 'R$ 4.299',
    status: 'Pago'
  },
  {
    id: 3,
    customer: 'Mariana Costa',
    product: 'Notebook Gamer RTX',
    total: 'R$ 4.500',
    status: 'Enviado'
  },
  {
    id: 4,
    customer: 'Lucas Almeida',
    product: 'Apple Watch Series 9',
    total: 'R$ 3.499',
    status: 'Processando'
  },
  {
    id: 5,
    customer: 'Fernanda Lima',
    product: 'Monitor UltraWide 34"',
    total: 'R$ 2.899',
    status: 'Pago'
  }
]
</script>

<template>
  <div class="p-6 space-y-8">

    <!-- Header -->
    <div>

      <h1 class="text-4xl font-extrabold text-slate-800">
        Dashboard de Relatórios
      </h1>

      <p class="text-gray-500 text-lg mt-2">
        Acompanhe métricas, vendas e desempenho da loja
      </p>

    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <div
        v-for="metric in metrics"
        :key="metric.title"
        class="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 hover:scale-[1.02] transition"
      >

        <div class="flex items-center justify-between">

          <div>

            <p class="text-gray-500 text-lg">
              {{ metric.title }}
            </p>

            <h2 class="text-4xl font-extrabold text-slate-800 mt-3">
              {{ metric.value }}
            </h2>

          </div>

          <div
            :class="metric.color"
            class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg text-white"
          >
            {{ metric.icon }}
          </div>

        </div>

      </div>

    </div>

    <!-- Gráfico fake -->
    <div
      class="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8"
    >

      <div class="flex items-center justify-between mb-8">

        <div>

          <h2 class="text-3xl font-bold text-slate-800">
            Desempenho de Vendas
          </h2>

          <p class="text-gray-500 mt-2">
            Últimos 6 meses
          </p>

        </div>

        <span
          class="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold"
        >
          +18%
        </span>

      </div>

      <!-- Barras -->
      <div class="space-y-6">

        <div>

          <div class="flex justify-between mb-2">

            <span class="font-semibold text-slate-700">
              Janeiro
            </span>

            <span class="text-gray-500">
              R$ 18.500
            </span>

          </div>

          <div class="w-full bg-gray-200 rounded-full h-5">

            <div
              class="bg-blue-500 h-5 rounded-full w-[45%]"
            ></div>

          </div>

        </div>

        <div>

          <div class="flex justify-between mb-2">

            <span class="font-semibold text-slate-700">
              Fevereiro
            </span>

            <span class="text-gray-500">
              R$ 24.900
            </span>

          </div>

          <div class="w-full bg-gray-200 rounded-full h-5">

            <div
              class="bg-green-500 h-5 rounded-full w-[60%]"
            ></div>

          </div>

        </div>

        <div>

          <div class="flex justify-between mb-2">

            <span class="font-semibold text-slate-700">
              Março
            </span>

            <span class="text-gray-500">
              R$ 31.700
            </span>

          </div>

          <div class="w-full bg-gray-200 rounded-full h-5">

            <div
              class="bg-purple-500 h-5 rounded-full w-[75%]"
            ></div>

          </div>

        </div>

        <div>

          <div class="flex justify-between mb-2">

            <span class="font-semibold text-slate-700">
              Abril
            </span>

            <span class="text-gray-500">
              R$ 42.100
            </span>

          </div>

          <div class="w-full bg-gray-200 rounded-full h-5">

            <div
              class="bg-orange-500 h-5 rounded-full w-[90%]"
            ></div>

          </div>

        </div>

      </div>

    </div>

    <!-- Últimas vendas -->
    <div
      class="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
    >

      <!-- Header -->
      <div
        class="px-8 py-6 border-b border-gray-200 bg-slate-50"
      >

        <h2 class="text-3xl font-bold text-slate-800">
          Últimas Vendas
        </h2>

        <p class="text-gray-500 mt-2">
          Pedidos recentes realizados na loja
        </p>

      </div>

      <!-- Tabela -->
      <div class="overflow-x-auto">

        <table class="w-full">

          <thead class="bg-slate-100">

            <tr>

              <th class="text-left px-6 py-4 text-slate-700 font-bold">
                ID
              </th>

              <th class="text-left px-6 py-4 text-slate-700 font-bold">
                Cliente
              </th>

              <th class="text-left px-6 py-4 text-slate-700 font-bold">
                Produto
              </th>

              <th class="text-left px-6 py-4 text-slate-700 font-bold">
                Total
              </th>

              <th class="text-left px-6 py-4 text-slate-700 font-bold">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            <tr
              v-for="sale in recentSales"
              :key="sale.id"
              class="border-b border-gray-100 hover:bg-slate-50 transition"
            >

              <td class="px-6 py-5 font-semibold">
                #{{ sale.id }}
              </td>

              <td class="px-6 py-5">
                {{ sale.customer }}
              </td>

              <td class="px-6 py-5">
                {{ sale.product }}
              </td>

              <td class="px-6 py-5 font-bold text-green-600">
                {{ sale.total }}
              </td>

              <td class="px-6 py-5">

                <span
                  v-if="sale.status === 'Pago'"
                  class="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold"
                >
                  {{ sale.status }}
                </span>

                <span
                  v-else-if="sale.status === 'Enviado'"
                  class="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold"
                >
                  {{ sale.status }}
                </span>

                <span
                  v-else
                  class="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold"
                >
                  {{ sale.status }}
                </span>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>