<template>
  <div class="min-h-screen bg-gray-50">
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
          <PizzaCard
            v-for="item in filteredItems"
            :key="item.id"
            :pizza="item"
            @add-to-cart="addToCart"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import PizzaCard from "~/components/PizzaCard.vue";

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
        price: 45.00,
        size: "8 fatias",
        category: "Pizzas Tradicionais",
        image: "/images/pizzas/margherita.jpg",
      },
      {
        id: 2,
        name: "Pepperoni",
        description: "Molho de tomate, mussarela e pepperoni",
        price: 55.00,
        size: "8 fatias",
        category: "Pizzas Tradicionais",
        image: "/images/pizzas/pepperoni.jpg",
      },
      {
        id: 3,
        name: "Quatro Queijos",
        description:
          "Molho de tomate, mussarela, parmesão, gorgonzola e catupiry",
        price: 60.00,
        size: "8 fatias",
        category: "Pizzas Tradicionais",
        image: "/images/pizzas/quatro-queijos.jpg",
      },
      {
        id: 4,
        name: "Frango com Catupiry",
        description: "Molho de tomate, mussarela, frango desfiado e catupiry",
        price: 55.00,
        size: "8 fatias",
        category: "Pizzas Tradicionais",
        image: "/images/pizzas/frango-catupiry.jpg",
      },
      {
        id: 5,
        name: "Calabresa",
        description: "Molho de tomate, mussarela, calabresa fatiada e cebola",
        price: 50.00,
        size: "8 fatias",
        category: "Pizzas Tradicionais",
        image: "/images/pizzas/calabresa.jpg",
      },
      {
        id: 6,
        name: "Vegetariana",
        description:
          "Molho de tomate, mussarela, tomate, cebola, pimentão, champignon e azeitonas",
        price: 55.00,
        size: "8 fatias",
        category: "Pizzas Tradicionais",
        image: "/images/pizzas/vegetariana.jpg",
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
