<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-primary-500 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-white flex items-end gap-2"
        >
          <img src="/images/logo.png" alt="Pizza Castelo" class="h-10" />
          <span class="text-white text-2xl font-bold">Pizza Castelo</span>
        </NuxtLink>
        <NuxtLink
          to="/carrinho"
          class="text-white flex items-center gap-2"
          aria-label="Ver carrinho"
        >
          <UIcon name="i-heroicons-shopping-cart" class="w-6 h-6" />
          <span>Carrinho</span>
        </NuxtLink>
      </div>
    </header>
    <UContainer>
      <div class="py-6">
        <!-- Header com seleção de categoria e busca -->
        <div class="flex items-center justify-between mb-8">
          <USelect
            v-model="selectedCategory"
            :items="categories"
            class="w-48"
          />
          <UInput
            v-model="searchQuery"
            icon="i-heroicons-magnifying-glass"
            placeholder="Buscar no cardápio"
            class="w-64"
          />
        </div>

        <!-- Título da categoria -->
        <h2 class="text-2xl font-semibold mb-6">
          {{ currentCategory?.label }}
        </h2>

        <!-- Grid de produtos -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-32 h-32 object-contain rounded-md"
            />

            <div class="flex-1">
              <div class="flex flex-col h-full justify-between">
                <div>
                  <h3 class="font-medium text-lg">{{ item.name }}</h3>
                  <p class="text-sm text-gray-500">{{ item.size }}</p>
                  <p class="text-sm text-gray-600 mt-1">
                    {{ item.description }}
                  </p>
                  <p v-if="item.info" class="text-xs text-gray-400 mt-1">
                    {{ item.info }}
                  </p>
                </div>

                <div class="mt-4 flex items-center justify-between">
                  <span class="font-semibold text-lg"
                    >R$ {{ item.price.toFixed(2) }}</span
                  >
                  <UButton
                    color="primary"
                    variant="solid"
                    icon="i-heroicons-plus"
                    @click="addToCart(item)"
                  >
                    Adicionar
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  size: string;
  info?: string;
}

interface Category {
  id: number;
  label: string;
  value: string;
  items: MenuItem[];
}

const searchQuery = ref("");
const selectedCategory = ref("Pizzas Tradicionais");

const categories = ref<Category[]>([
  {
    id: 1,
    label: "Pizzas Tradicionais",
    value: "Pizzas Tradicionais",
    items: [
      {
        id: 1,
        name: "Margherita",
        description: "Molho de tomate, mussarela, manjericão fresco e azeite",
        price: 45.0,
        size: "8 fatias",
        category: "Pizzas Tradicionais",
        image: "/images/pizzas/margherita.jpg",
      },
      {
        id: 2,
        name: "Calabresa",
        description: "Molho de tomate, mussarela, calabresa fatiada e cebola",
        price: 50.0,
        size: "8 fatias",
        category: "Pizzas Tradicionais",
        image: "/images/pizzas/calabresa.jpg",
      },
    ],
  },
  {
    id: 2,
    label: "Bebidas",
    value: "Bebidas",
    items: [
      {
        id: 3,
        name: "Cerveja Budweiser",
        description: "Lata 350ml",
        price: 6.0,
        size: "Lata 350ml",
        info: "Produto para maiores de 18 anos",
        category: "Bebidas",
        image: "/images/bebidas/budweiser.jpg",
      },
      {
        id: 4,
        name: "Coca-Cola Zero",
        description: "Lata 350ml",
        price: 6.0,
        size: "Lata 350ml",
        category: "Bebidas",
        image: "/images/bebidas/coca-zero.jpg",
      },
      {
        id: 5,
        name: "Coca-Cola",
        description: "Garrafa 1L",
        price: 9.0,
        size: "Garrafa 1L",
        category: "Bebidas",
        image: "/images/bebidas/coca-1l.jpg",
      },
      {
        id: 6,
        name: "Fanta Laranja",
        description: "Garrafa 1L",
        price: 10.0,
        size: "Garrafa 1L",
        category: "Bebidas",
        image: "/images/bebidas/fanta-1l.jpg",
      },
      {
        id: 7,
        name: "Guaraná Antarctica",
        description: "Garrafa 1L",
        price: 10.0,
        size: "Garrafa 1L",
        category: "Bebidas",
        image: "/images/bebidas/guarana-1l.jpg",
      },
    ],
  },
]);

const currentCategory = computed(() => {
  return categories.value.find((c) => c.value === selectedCategory.value);
});

const filteredItems = computed(() => {
  const items = currentCategory.value?.items || [];
  if (!searchQuery.value) return items;

  const query = searchQuery.value.toLowerCase();
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
  );
});

const addToCart = (item: MenuItem) => {
  // Implementar lógica de adicionar ao carrinho
  console.log("Adicionado ao carrinho:", item);
};
</script>
