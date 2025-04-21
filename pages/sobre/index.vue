<template>
  <div class="flex flex-col min-h-screen bg-[#FEF2F2]">
    <!-- Header -->
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

    <!-- Main -->
    <main class="flex-1 container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm mb-8">
          <NuxtLink to="/" class="text-gray-600 hover:underline">
            Início
          </NuxtLink>
          <UIcon
            name="i-heroicons-chevron-right"
            class="w-4 h-4 text-gray-400"
          />
          <span class="text-primary-600">Sobre Nós</span>
        </nav>

        <!-- História Principal -->
        <UCard class="mb-8">
          <div class="text-center py-8 px-4">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              Nossa História
            </h1>
            <p class="text-gray-600">
              Uma jornada de paixão, tradição e sabor italiano.
            </p>
          </div>
        </UCard>

        <!-- A História -->
        <div class="space-y-8">
          <UCard>
            <div class="p-6 prose prose-lg max-w-none">
              <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                Do Sonho à Realidade
              </h2>
              <p class="text-gray-600 leading-relaxed">
                Tudo começou em 2010, quando três amigos apaixonados por
                gastronomia se encontraram em uma viagem pela Itália. Castelo,
                um chef experiente com raízes italianas, Janio Marinho, um
                empresário visionário, e Micael Silva, um mestre pizzaiolo
                premiado, compartilhavam não apenas a paixão pela culinária, mas
                também o sonho de trazer a autêntica pizza italiana para o
                Brasil.
              </p>

              <div class="my-8">
                <UCarousel
                  v-slot="{ item }"
                  dots
                  loop
                  arrows
                  :items="evolucao"
                  class="w-full md:w-3/4 lg:w-2/3 mx-auto"
                >
                  <div class="relative aspect-[4/3] w-full">
                    <img
                      :src="item.imagem"
                      :alt="item.descricao"
                      class="rounded-lg object-cover w-full h-full"
                    />
                    <p class="text-sm text-gray-500 mt-2 text-center">
                      {{ item.descricao }}
                    </p>
                  </div>
                </UCarousel>
              </div>

              <p class="text-gray-600 leading-relaxed">
                Durante sua jornada por Nápoles, os três amigos descobriram os
                segredos da verdadeira pizza napolitana com um antigo mestre
                pizzaiolo, que compartilhou não apenas suas receitas
                centenárias, mas também a história por trás de cada ingrediente.
                Foi ali que nasceu a Pizza Castelo.
              </p>

              <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">
                Os Três Pilares
              </h3>

              <div class="grid md:grid-cols-3 gap-6 my-8">
                <div class="text-center">
                  <div
                    class="bg-primary-50 rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-heroicons-fire"
                      class="w-12 h-12 text-primary-500"
                    />
                  </div>
                  <h4 class="font-semibold text-gray-800 mb-2">Castelo</h4>
                  <p class="text-sm text-gray-600">
                    Chef executivo e guardião das receitas tradicionais
                    italianas.
                  </p>
                </div>

                <div class="text-center">
                  <div
                    class="bg-primary-50 rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-heroicons-light-bulb"
                      class="w-12 h-12 text-primary-500"
                    />
                  </div>
                  <h4 class="font-semibold text-gray-800 mb-2">
                    Janio Marinho
                  </h4>
                  <p class="text-sm text-gray-600">
                    Visionário que transformou uma pequena pizzaria em uma
                    referência gastronômica.
                  </p>
                </div>

                <div class="text-center">
                  <div
                    class="bg-primary-50 rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-heroicons-star"
                      class="w-12 h-12 text-primary-500"
                    />
                  </div>
                  <h4 class="font-semibold text-gray-800 mb-2">Micael Silva</h4>
                  <p class="text-sm text-gray-600">
                    Mestre pizzaiolo premiado internacionalmente por suas
                    criações únicas.
                  </p>
                </div>
              </div>

              <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">
                Nossa Filosofia
              </h3>
              <p class="text-gray-600 leading-relaxed">
                A Pizza Castelo não é apenas uma pizzaria, é um pedaço da Itália
                no coração do Brasil. Nossa filosofia é simples: ingredientes
                frescos, técnicas tradicionais e muito amor em cada pizza. O
                forno a lenha, trazido diretamente da Itália, e nossa massa que
                fermenta por 48 horas são apenas alguns dos segredos que fazem
                nossas pizzas serem únicas.
              </p>

              <div class="bg-primary-50 rounded-lg p-6 my-8">
                <h4 class="font-semibold text-gray-800 mb-4">Nossos Valores</h4>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-primary-500 mr-2"
                    />
                    Compromisso com a qualidade dos ingredientes
                  </li>
                  <li class="flex items-center">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-primary-500 mr-2"
                    />
                    Respeito às tradições italianas
                  </li>
                  <li class="flex items-center">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-primary-500 mr-2"
                    />
                    Inovação com responsabilidade
                  </li>
                  <li class="flex items-center">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-primary-500 mr-2"
                    />
                    Atendimento acolhedor e familiar
                  </li>
                </ul>
              </div>

              <p class="text-gray-600 leading-relaxed">
                Hoje, a Pizza Castelo é mais do que um restaurante; é um ponto
                de encontro para famílias e amigos, um lugar onde histórias são
                compartilhadas e momentos especiais são celebrados, sempre
                acompanhados do melhor da gastronomia italiana.
              </p>
            </div>
          </UCard>

          <!-- Números -->
          <UCard>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-6 text-center">
                Nossa História em Números
              </h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div class="text-3xl font-bold text-primary-500 mb-2">14</div>
                  <div class="text-sm text-gray-600">Anos de História</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-primary-500 mb-2">
                    50+
                  </div>
                  <div class="text-sm text-gray-600">Sabores Únicos</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-primary-500 mb-2">
                    100k+
                  </div>
                  <div class="text-sm text-gray-600">Clientes Felizes</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-primary-500 mb-2">5</div>
                  <div class="text-sm text-gray-600">
                    Prêmios Internacionais
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-primary-500 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-2">Pizza Castelo</h3>
            <p class="text-sm">
              Servindo as melhores pizzas da cidade desde 2010.<br />
              Ingredientes frescos e massa artesanal.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Contato</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center">
                <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-2" />
                (11) 5555‑1234
              </li>
              <li class="flex items-center">
                <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-2" />
                Rua das Pizzas, 123
              </li>
              <li class="flex items-center">
                <UIcon name="i-heroicons-clock" class="w-5 h-5 mr-2" />
                Ter‑Dom: 18:00‑23:00
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Links Rápidos</h3>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/">Início</NuxtLink></li>
              <li><NuxtLink to="/cardapio">Cardápio</NuxtLink></li>
              <li>
                <NuxtLink to="/sobre/privacidade">
                  Política de Privacidade
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/sobre/termos">Termos e Condições</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Sobre Nós - Pizza Castelo",
  description:
    "Conheça a história da Pizza Castelo, uma jornada de paixão, tradição e sabor italiano desde 2010.",
});

const evolucao = [
  {
    id: 1,
    imagem: "/images/pizzaria/2010.png",
    descricao: "Nossa primeira pizzaria em 2010",
  },
  {
    id: 2,
    imagem: "/images/pizzaria/2015.png",
    descricao: "Nossa segunda pizzaria em 2015",
  },
  {
    id: 3,
    imagem: "/images/pizzaria/2020.png",
    descricao: "Nossa terceira pizzaria em 2020",
  },
  {
    id: 4,
    imagem: "/images/pizzaria/2025.png",
    descricao: "Nossa quarta pizzaria em 2025",
  },
  {
    id: 5,
    imagem: "/images/pizzaria/2030.png",
    descricao: "Nossa quinta pizzaria em 2030",
  },
];
</script>
