<template>
  <header class="container mx-auto px-4 lg:px-48">
    <nav
      aria-label="Main navigation"
      class="flex items-center justify-between py-4"
    >
      <NuxtLink to="/" class="flex items-center">
        <img src="/images/logo.png" alt="Pizza Castelo" class="h-8" />
        <span class="ml-2 text-xl font-bold text-red-600">Pizza Castelo</span>
      </NuxtLink>

      <div class="flex items-center space-x-6 text-gray-700 font-semibold">
        <NuxtLink to="/">Início</NuxtLink>
        <NuxtLink to="/cardapio">Cardápio</NuxtLink>
        <NuxtLink to="/sobre">Sobre</NuxtLink>
        <NuxtLink to="/sobre/contato">Contato</NuxtLink>
        <NuxtLink v-if="isLoggedIn" to="/historico">Histórico</NuxtLink>
      </div>

      <div class="flex items-center space-x-6">
        <NuxtLink
          v-if="!isLoggedIn"
          to="/login"
          class="text-gray-700 font-semibold"
        >
          Entrar
        </NuxtLink>

        <NuxtLink
          to="/carrinho"
          class="bg-red-600 relative text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-red-700"
        >
          <Icon name="uil:shopping-cart" class="w-4 h-4" />
          <span>Carrinho</span>
          <UBadge
            v-if="totalItems > 0"
            color="neutral"
            class="absolute -top-2 -right-2 rounded-full"
          >
            {{ totalItems }}
          </UBadge>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "@/stores/user";
import { useCartStore } from "@/stores/cart";
const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.isLoggedIn);
const cartStore = useCartStore();
const totalItems = computed(() => cartStore.totalItems);
</script>
