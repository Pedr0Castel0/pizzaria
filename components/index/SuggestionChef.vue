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

    <div
      v-if="sugestoes.length > 0"
      class="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <div
        v-for="(pizza, index) in sugestoes"
        :key="index"
        class="border-2 border-red-500 rounded-lg p-4 flex flex-col shadow bg-white"
      >
        <img
          :src="`/images/pizzas/${pizza.nome}.jpg`"
          :alt="pizza.nome"
          class="w-full h-32 object-cover rounded-lg mb-4"
        />
        <h3 class="font-bold text-base mb-1 text-gray-800">
          {{ pizza.nome }}
        </h3>
        <div class="flex items-center justify-between mt-auto">
          <span class="text-red-600 font-bold text-lg"
            >R$ {{ pizza.preco }}</span
          >
          <button
            class="text-red-600 border border-red-500 px-4 py-1 rounded hover:bg-red-100 text-sm font-medium"
            @click="addPizzaToCart(pizza)"
          >
            Pedir agora
          </button>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p class="text-gray-600">
        Não há sugestões de pizza para você no momento.
      </p>
      <p class="text-gray-600">Tente novamente mais tarde.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRecommendations } from "~/composables/useRecommendations";
import { useCartStore } from "~/stores/cart";
const toast = useToast();

interface PizzaRecomendada {
  nome: string;
  preco: number;
}

const sugestoes = ref<PizzaRecomendada[]>([]);

const { obterRecomendacoes } = useRecommendations();

onMounted(async () => {
  const recomendacoes = await obterRecomendacoes();
  sugestoes.value = recomendacoes?.pizzas_recomendadas ?? [];
  console.log("recomendacoes", sugestoes.value);
});

const addPizzaToCart = (pizza: PizzaRecomendada) => {
  const cartStore = useCartStore();
  const pizzaEncontrada = mockPizzas.find(
    (p) => p.name.toLowerCase() === pizza.nome.toLowerCase()
  );

  if (pizzaEncontrada) {
    cartStore.add({
      id: pizzaEncontrada.id,
      name: pizzaEncontrada.name,
      description: pizzaEncontrada.description,
      price: pizzaEncontrada.price,
      quantity: 1,
      category: pizzaEncontrada.category,
      image: pizzaEncontrada.image,
      size: pizzaEncontrada.size,
    });

    toast.add({
      title: "Pizza adicionada ao carrinho",
      description: "Pizza adicionada ao carrinho com sucesso",
      icon: "i-heroicons-check-circle",
      color: "success",
      duration: 2000,
    });
  }
};

const mockPizzas = [
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
    description: "Molho de tomate, mussarela, parmesão, gorgonzola e catupiry",
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
];
</script>
