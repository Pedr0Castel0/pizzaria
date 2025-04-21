<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="mx-auto px-48 py-28 flex items-center justify-between bg-[#FEF2F2]"
    >
      <div class="max-w-lg">
        <h1 class="text-5xl font-bold text-red-600 mb-4">
          Sabor autêntico em cada fatia
        </h1>
        <p class="text-gray-600 mb-6">
          Nossas pizzas são preparadas com ingredientes frescos e de alta
          qualidade, seguindo receitas tradicionais italianas.
        </p>
        <nuxt-link
          to="/cardapio"
          class="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 items-center space-x-2 inline-flex"
        >
          <div>Ver cardápio</div>
          <Icon name="uil:arrow-right" class="w-4 h-4" />
        </nuxt-link>
        <div class="flex items-center mt-4">
          <div class="flex">
            <span class="text-yellow-400">★★★★★</span>
          </div>
          <span class="ml-2 text-sm text-gray-600"
            >Mais de 530 avaliações 5 estrelas</span
          >
        </div>
      </div>
      <div class="relative">
        <div
          class="absolute -right-4 top-4 w-full h-full bg-red-600 rounded-lg transform rotate-x-2"
        ></div>
        <img
          src="/images/hero-pizza.jpg"
          alt="Pizza deliciosa"
          class="relative w-96 h-96 object-cover rounded-lg"
        />
      </div>
    </section>

    <!-- Sugestão do Chefe -->
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

    <!-- Cardápio -->
    <section class="mx-auto px-48 py-12 bg-gray-50">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-red-600">Nosso Cardápio</h2>
        <p class="text-gray-600 mt-2">
          Descubra nossas deliciosas opções de pizzas artesanais.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="pizza in cardapio"
          :key="pizza.id"
          class="flex flex-col text-left border border-gray-200 rounded-lg shadow h-full bg-white"
        >
          <img
            :src="pizza.imagem"
            :alt="pizza.nome"
            class="w-full h-48 object-cover rounded-t-lg"
          />
          <div class="flex flex-col flex-grow p-4">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-bold text-lg text-gray-800">{{ pizza.nome }}</h3>
              <span class="text-red-600 font-bold">R$ {{ pizza.preco }}</span>
            </div>
            <p class="text-gray-600 text-sm mb-4 flex-grow">
              {{ pizza.descricao }}
            </p>
            <button
              class="bg-red-600 text-white py-2 px-3 rounded-md text-sm w-full mt-auto"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center mt-8">
        <p class="text-gray-600 text-sm mb-4">
          Nossas pizzas possuem 10 fatias cada
        </p>
        <nuxt-link
          to="/cardapio"
          class="text-red-600 hover:text-red-700 flex items-center mx-auto text-sm hover:underline"
        >
          Ver cardápio completo
          <span class="ml-2">→</span>
        </nuxt-link>
      </div>
    </section>

    <!-- Contato -->
    <section class="mx-auto px-48 py-12 bg-[#FEF2F2]">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-red-600">Entre em Contato</h2>
        <p class="text-gray-600 mt-2">
          Estamos sempre prontos para atender você. Faça seu pedido ou tire suas
          dúvidas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg p-8 text-center shadow-sm">
          <div class="flex justify-center mb-4">
            <div class="bg-[#FEF2F2] p-4 rounded-full">
              <Icon name="uil:phone" class="text-red-600 w-8 h-8" />
            </div>
          </div>
          <h3 class="font-bold text-xl mb-2 text-gray-800">Telefone</h3>
          <p class="text-gray-600 text-sm mb-2">Faça seu pedido por telefone</p>
          <p class="text-red-600 font-bold text-lg">(82) 4002-8922</p>
        </div>

        <div class="bg-white rounded-lg p-8 text-center shadow-sm">
          <div class="flex justify-center mb-4">
            <div class="bg-[#FEF2F2] p-4 rounded-full">
              <Icon name="uil:location-point" class="text-red-600 w-8 h-8" />
            </div>
          </div>
          <h3 class="font-bold text-xl mb-2 text-gray-800">Endereço</h3>
          <p class="text-gray-600 text-sm mb-2">Visite nossa pizzaria</p>
          <p class="text-gray-800 font-bold text-lg">
            Rua Fernando Pinheiro, Nº 175
          </p>
        </div>

        <div class="bg-white rounded-lg p-8 text-center shadow-sm">
          <div class="flex justify-center mb-4">
            <div class="bg-[#FEF2F2] p-4 rounded-full">
              <Icon name="uil:clock" class="text-red-600 w-8 h-8" />
            </div>
          </div>
          <h3 class="font-bold text-xl mb-2 text-gray-800">Horário</h3>
          <p class="text-gray-600 text-sm mb-2">Estamos abertos</p>
          <p class="text-gray-800 font-bold text-lg">Seg-Dom: 18h às 23h</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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

const cardapio = [
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
    nome: "Pepperoni",
    descricao: "Molho de tomate, pepperoni e queijo",
    preco: "59.90",
    imagem: "/images/pizzas/pepperoni.jpg",
  },
  {
    id: 3,
    nome: "Quatro Queijos",
    descricao: "Mussarela, gorgonzola, parmesão e provolone",
    preco: "59.90",
    imagem: "/images/pizzas/quatro-queijos.jpg",
  },
  {
    id: 4,
    nome: "Calabresa Acebolada",
    descricao: "Mussarela, calabresa e cebola",
    preco: "59.90",
    imagem: "/images/pizzas/calabresa.jpg",
  },
  {
    id: 5,
    nome: "Vegetariana",
    descricao: "Mussarela, tomate, champignon, pimentão e azeitona",
    preco: "59.90",
    imagem: "/images/pizzas/vegetariana.jpg",
  },
  {
    id: 6,
    nome: "Frango com Catupiry",
    descricao: "Mussarela, frango e Catupiry",
    preco: "59.90",
    imagem: "/images/pizzas/frango-catupiry.jpg",
  },
];
</script>
