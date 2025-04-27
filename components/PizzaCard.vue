<template>
  <div
    class="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
  >
    <img
      :src="pizza.image"
      :alt="pizza.name"
      class="w-32 h-32 object-cover rounded-md"
    />

    <div class="flex-1">
      <div class="flex flex-col h-full justify-between">
        <div>
          <h3 class="font-medium text-lg">{{ pizza.name }}</h3>
          <p class="text-sm text-gray-500">{{ pizza.size }}</p>
          <p class="text-sm text-gray-600 mt-1">
            {{ pizza.description }}
          </p>
          <p v-if="pizza.info" class="text-xs text-gray-400 mt-1">
            {{ pizza.info }}
          </p>
        </div>

        <div class="mt-4 flex items-center justify-between">
          <span class="font-semibold text-lg"
            >R$ {{ pizza.price.toFixed(2) }}</span
          >
          <UButton
            color="primary"
            variant="solid"
            icon="i-heroicons-plus"
            @click="addPizzaToCart(pizza)"
          >
            Adicionar
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
  size: string;
  info?: string;
}

defineProps<{
  pizza: Pizza;
}>();

const addPizzaToCart = (pizza: Pizza) => {
  const cartStore = useCartStore();
  cartStore.add(pizza);
};
</script>
