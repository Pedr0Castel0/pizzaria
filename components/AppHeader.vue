<template>
  <!-- Header/Navbar -->
  <div class="px-48">
    <nav class="flex items-center justify-between py-4">
      <nuxt-link to="/" class="flex items-center">
        <img src="/images/logo.png" alt="Pizza Castelo" class="h-8" />
        <span class="ml-2 text-xl font-bold text-red-600">Pizza Castelo</span>
      </nuxt-link>
      <div class="flex items-center space-x-6 text-gray-700 font-semibold">
        <nuxt-link to="/">Início</nuxt-link>
        <nuxt-link to="/cardapio">Cardápio</nuxt-link>
        <nuxt-link to="/sobre">Sobre</nuxt-link>
        <nuxt-link to="/sobre/contato">Contato</nuxt-link>
      </div>
      <div class="flex items-center space-x-6">
        <nuxt-link to="/login" class="text-gray-700 font-semibold"
          >Entrar</nuxt-link
        >
        <nuxt-link
          to="/carrinho"
          class="bg-red-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-red-700"
        >
          <Icon name="uil:shopping-cart" class="w-4 h-4" />
          <div>Carrinho</div>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script setup></script>
