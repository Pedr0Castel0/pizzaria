<template>
  <section class="mx-auto px-64 py-32">
    <div class="text-center mb-12">
      <h2
        class="text-3xl font-bold text-red-600 flex items-center justify-center space-x-2"
      >
        SUGESTÃO DO CHEFE
        <img src="/images/chef-hat.png" alt="Chef" class="h-14 ml-2" />
      </h2>
      <p class="text-gray-600 mt-2">
        Achamos que você pode gostar dessas pizzas!
      </p>
      <p class="text-gray-600">
        Aproveite e experimente algo novo e de qualidade garantida!
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="pizza in sugestoes"
        :key="pizza.id"
        class="border-2 border-red-500 rounded-lg p-4 flex flex-col shadow bg-white"
      >
        <img
          :src="pizza.imagem"
          :alt="pizza.nome"
          class="w-full object-cover rounded-lg mb-4"
        />
        <h3 class="font-bold text-base mb-1 text-gray-800">
          {{ pizza.nome }}
        </h3>
        <p class="text-gray-600 text-sm mb-4">{{ pizza.descricao }}</p>
        <div class="flex items-center justify-between mt-auto">
          <span class="text-red-600 font-bold text-lg"
            >R$ {{ pizza.preco }}</span
          >
          <button
            class="text-red-600 border border-red-500 px-4 py-1 rounded hover:bg-red-100 text-sm font-medium"
          >
            Pedir agora
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sugestoes = [
  {
    id: 1,
    nome: "Margherita",
    descricao:
      "Molho de tomate, Mussarela de búfala, Manjericão fresco e Azeite de oliva",
    preco: "69.90",
    imagem: "/images/pizzas/margherita.jpg",
  },
  {
    id: 2,
    nome: "Cinco Queijos",
    descricao: "Mussarela, Gorgonzola, Provolone, Parmesão e Catupiry",
    preco: "69.90",
    imagem: "/images/pizzas/cinco-queijos.jpg",
  },
  {
    id: 3,
    nome: "Queijo Brie Picante",
    descricao: "Queijo Brie, Mel e Pimenta",
    preco: "79.00",
    imagem: "/images/pizzas/brie-picante.jpg",
  },
];
</script>
