<template>
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
</template>
