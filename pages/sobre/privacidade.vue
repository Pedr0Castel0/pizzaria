<template>
  <div class="flex flex-col min-h-screen bg-[#FEF2F2]">
    <!-- Main -->
    <main class="flex-1 container mx-auto px-48 py-8">
      <div class="mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm mb-8">
          <NuxtLink to="/" class="text-gray-600 hover:underline"
            >Início</NuxtLink
          >
          <UIcon
            name="i-heroicons-chevron-right"
            class="w-4 h-4 text-gray-400"
          />
          <span class="text-primary-600">Política de Privacidade</span>
        </nav>

        <!-- Título -->
        <UCard class="mb-8">
          <div class="text-center py-8 px-4">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              Política de Privacidade
            </h1>
            <p class="text-gray-600">
              Sua privacidade é importante para nós. Conheça como tratamos seus
              dados.
            </p>
          </div>
        </UCard>

        <!-- Conteúdo -->
        <div class="space-y-8">
          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">
                1. Informações que Coletamos
              </h2>
            </template>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">
                Coletamos as seguintes informações quando você utiliza nossos
                serviços:
              </p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Informações de cadastro (nome, e-mail, telefone)</li>
                <li>Endereço para entrega</li>
                <li>Histórico de pedidos</li>
                <li>Preferências de pizza e personalização</li>
              </ul>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">
                2. Como Usamos suas Informações
              </h2>
            </template>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">Utilizamos suas informações para:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Processar e entregar seus pedidos</li>
                <li>Melhorar nossos produtos e serviços</li>
                <li>Enviar promoções e novidades (com seu consentimento)</li>
                <li>Garantir a segurança da sua conta</li>
              </ul>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">
                3. Proteção de Dados
              </h2>
            </template>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">
                Implementamos medidas de segurança para proteger suas
                informações:
              </p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Criptografia de dados sensíveis</li>
                <li>Acesso restrito a informações pessoais</li>
                <li>Monitoramento constante de segurança</li>
                <li>Atualizações regulares de proteção</li>
              </ul>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">
                4. Seus Direitos
              </h2>
            </template>
            <div class="p-6 space-y-4">
              <p class="text-gray-600">Você tem direito a:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Acessar seus dados pessoais</li>
                <li>Solicitar correção de informações</li>
                <li>Pedir exclusão de dados</li>
                <li>Revogar consentimento para marketing</li>
              </ul>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">5. Contato</h2>
            </template>
            <div class="p-6">
              <p class="text-gray-600">
                Para questões sobre privacidade, entre em contato:
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
    <footer
      class="bg-primary-500 text-white py-8 mt-12 px-48 self-center w-full"
    >
      <div class="mx-auto">
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
                (82) 4002‑8922
              </li>
              <li class="flex items-center">
                <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-2" />
                Rua Fernando Pinheiro, Nº 175
              </li>
              <li class="flex items-center">
                <UIcon name="i-heroicons-clock" class="w-5 h-5 mr-2" />
                Seg‑Dom: 18h às 23h
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Links Rápidos</h3>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/">Início</NuxtLink></li>
              <li><NuxtLink to="/cardapio">Cardápio</NuxtLink></li>
              <li>
                <NuxtLink to="/sobre/privacidade"
                  >Política de Privacidade</NuxtLink
                >
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
  title: "Política de Privacidade - Pizza Castelo",
  description:
    "Conheça nossa política de privacidade e como protegemos seus dados.",
});
</script>
