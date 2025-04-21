<template>
  <!-- Footer -->
  <footer class="bg-white px-48 py-8">
    <div class="mx-auto">
      <div class="flex justify-center items-center mb-4">
        <img src="/images/logo.png" alt="Pizza Castelo" class="h-8" />
        <span class="ml-2 text-xl font-bold text-red-600">Pizza Castelo</span>
      </div>
      <div class="flex justify-center space-x-6">
        <nuxt-link to="/" class="text-gray-700">Início</nuxt-link>
        <nuxt-link to="/cardapio" class="text-gray-700">Cardápio</nuxt-link>
        <nuxt-link to="/sobre" class="text-gray-700">Sobre</nuxt-link>
        <nuxt-link to="/sobre/contato" class="text-gray-700">Contato</nuxt-link>
      </div>
      <div class="flex justify-center space-x-4 mt-4">
        <a href="#" class="text-gray-400 hover:text-gray-600">
          <Icon name="uil:facebook" style="color: black" />
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-600">
          <Icon name="uil:instagram" style="color: black" />
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-600">
          <Icon name="uil:twitter" style="color: black" />
        </a>
      </div>
      <p class="text-center text-gray-600 text-sm mt-4">
        © 2024 Pizza Castelo Todos os direitos reservados
      </p>
    </div>
  </footer>
</template>


