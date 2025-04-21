<template>
  <div class="flex flex-col min-h-screen bg-[#FEF2F2]">
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
          <span class="text-primary-600">Termos e Condições</span>
        </nav>

        <!-- Título -->
        <UCard class="mb-8">
          <div class="text-center py-8 px-4">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              Termos e Condições
            </h1>
            <p class="text-gray-600">
              Leia atentamente nossos termos de uso e condições de serviço.
            </p>
          </div>
        </UCard>

        <!-- Conteúdo -->
        <div class="space-y-8">
          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">
                1. Aceitação dos Termos
              </h2>
            </template>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">
                Ao utilizar nossos serviços, você concorda com os seguintes
                termos:
              </p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Ter idade mínima de 18 anos para realizar pedidos</li>
                <li>Fornecer informações verdadeiras e precisas</li>
                <li>Responsabilizar-se pelo uso da sua conta</li>
                <li>Aceitar nossa política de privacidade</li>
              </ul>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">
                2. Pedidos e Entregas
              </h2>
            </template>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">Condições para pedidos e entregas:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Pedido mínimo de R$ 30,00 para delivery</li>
                <li>Entrega gratuita para pedidos acima de R$ 100,00</li>
                <li>Prazo de entrega estimado de 45-60 minutos</li>
                <li>Área de entrega limitada (consulte CEPs atendidos)</li>
              </ul>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">
                3. Pagamentos e Preços
              </h2>
            </template>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">Informações sobre pagamentos:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Aceitamos cartões de crédito, débito e PIX</li>
                <li>Preços sujeitos a alteração sem aviso prévio</li>
                <li>Promoções não cumulativas</li>
                <li>Pagamento processado de forma segura</li>
              </ul>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">
                4. Cancelamentos e Reembolsos
              </h2>
            </template>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">Nossa política de cancelamento:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Cancelamento gratuito antes do preparo</li>
                <li>Reembolso em até 7 dias úteis</li>
                <li>Trocas em caso de problemas com o produto</li>
                <li>Suporte ao cliente 7 dias por semana</li>
              </ul>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">
                5. Responsabilidades
              </h2>
            </template>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">Compromissos e responsabilidades:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Garantia de qualidade dos produtos</li>
                <li>Higiene e segurança alimentar</li>
                <li>Sigilo das informações dos clientes</li>
                <li>Atendimento ao consumidor</li>
              </ul>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">6. Contato</h2>
            </template>
            <div class="p-6">
              <p class="text-gray-600">
                Para dúvidas sobre nossos termos, entre em contato:
              </p>
              <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <UIcon
                      name="i-heroicons-envelope"
                      class="w-5 h-5 mr-2 text-primary-500"
                    />
                    contato@pizzacastelo.com
                  </li>
                  <li class="flex items-center">
                    <UIcon
                      name="i-heroicons-phone"
                      class="w-5 h-5 mr-2 text-primary-500"
                    />
                    (11) 5555‑1234
                  </li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Última atualização -->
        <p class="text-center text-sm text-gray-500 mt-8">
          Última atualização: Janeiro de 2024
        </p>
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
  title: "Termos e Condições - Pizza Castelo",
  description:
    "Conheça nossos termos de uso e condições de serviço para pedidos online.",
});
</script>
