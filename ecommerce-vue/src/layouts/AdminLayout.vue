<template>
  <div class="flex min-h-screen bg-gray-100">

    <!-- Sidebar -->
    <aside class="w-64 bg-slate-900 text-white p-6 shadow-xl">

      <h2 class="text-3xl font-bold mb-10 text-white">
        Admin
      </h2>

      <nav class="flex flex-col gap-5 text-lg">

        <router-link
          to="/admin/produtos"
          class="text-white hover:text-yellow-400 transition duration-300"
        >
          Produtos
        </router-link>

        <router-link
          to="/admin/relatorios"
          class="text-white hover:text-yellow-400 transition duration-300"
        >
          Relatórios
        </router-link>

      </nav>

    </aside>

    <!-- Conteúdo -->
    <main class="flex-1 p-8">
      <router-view />
    </main>

  </div>
</template>