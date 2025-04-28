<template>
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
            @click="addPizzaToCart(pizza)"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center mt-8">
      <p class="text-gray-600 text-sm mb-4">
        Nossas pizzas possuem 8 fatias cada
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
</template>

<script setup lang="ts">
const toast = useToast();

interface PizzaRecomendada {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
}

const addPizzaToCart = (pizza: PizzaRecomendada) => {
  const cartStore = useCartStore();
  const pizzaEncontrada = cardapio.find(
    (p) => p.nome.toLowerCase() === pizza.nome.toLowerCase()
  );

  if (pizzaEncontrada) {
    cartStore.add({
      id: pizzaEncontrada.id,
      name: pizzaEncontrada.nome,
      description: pizzaEncontrada.descricao,
      price: Number(pizzaEncontrada.preco),
      quantity: 1,
      image: pizzaEncontrada.imagem,
      category: "pizza",
      size: "grande",
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
