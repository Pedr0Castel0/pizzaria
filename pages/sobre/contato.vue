<template>
  <div class="flex flex-col min-h-screen bg-[#FEF2F2]">
    <!-- Main -->
    <main class="flex-1 container mx-auto px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm mb-8">
          <NuxtLink to="/" class="text-gray-600 hover:underline">
            Início
          </NuxtLink>
          <UIcon
            name="i-heroicons-chevron-right"
            class="w-4 h-4 text-gray-400"
          />
          <span class="text-primary-600">Contato</span>
        </nav>

        <!-- Título -->
        <UCard class="mb-8">
          <div class="text-center py-8 px-4">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h1>
            <p class="text-gray-600">
              Estamos aqui para ouvir você! Envie sua mensagem, sugestão ou
              pedido especial.
            </p>
          </div>
        </UCard>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Formulário de Contato -->
          <UCard class="self-start sticky top-5">
            <template #header>
              <h2 class="text-xl font-semibold text-gray-800">
                Formulário de Contato
              </h2>
            </template>
            <form class="p-6 space-y-6" @submit.prevent="enviarMensagem">
              <UFormField label="Nome" required>
                <UInput
                  v-model="form.nome"
                  placeholder="Digite seu nome"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Email" required>
                <UInput
                  v-model="form.email"
                  type="email"
                  placeholder="seu@email.com"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Assunto" required>
                <USelect
                  v-model="form.assunto"
                  :items="assuntos"
                  placeholder="Selecione o assunto"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Mensagem" required>
                <UTextarea
                  v-model="form.mensagem"
                  placeholder="Digite sua mensagem"
                  rows="4"
                  class="w-full"
                />
              </UFormField>

              <div class="flex justify-end">
                <UButton type="submit" color="primary" :loading="enviando">
                  Enviar Mensagem
                </UButton>
              </div>
            </form>
          </UCard>

          <!-- Informações de Contato -->
          <div class="space-y-8">
            <!-- Horário de Funcionamento -->
            <UCard>
              <template #header>
                <h2
                  class="text-xl font-semibold text-gray-800 flex items-center gap-2"
                >
                  <UIcon
                    name="i-heroicons-clock"
                    class="w-6 h-6 text-primary-500"
                  />
                  Horário de Funcionamento
                </h2>
              </template>
              <div class="p-6">
                <ul class="space-y-3">
                  <li class="flex justify-between items-center">
                    <span class="text-gray-600">Segunda-feira</span>
                    <span class="text-gray-800 font-medium">Fechado</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-gray-600">Terça a Quinta</span>
                    <span class="text-gray-800 font-medium">18:00 - 23:00</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-gray-600">Sexta e Sábado</span>
                    <span class="text-gray-800 font-medium">18:00 - 00:00</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-gray-600">Domingo</span>
                    <span class="text-gray-800 font-medium">18:00 - 22:00</span>
                  </li>
                </ul>
              </div>
            </UCard>

            <!-- Endereço -->
            <UCard>
              <template #header>
                <h2
                  class="text-xl font-semibold text-gray-800 flex items-center gap-2"
                >
                  <UIcon
                    name="i-heroicons-map-pin"
                    class="w-6 h-6 text-primary-500"
                  />
                  Onde Estamos
                </h2>
              </template>
              <div class="p-6">
                <div class="bg-gray-100 rounded-lg p-4 mb-4">
                  <p class="text-gray-800">Rua das Pizzas, 123</p>
                  <p class="text-gray-600">Centro - São Paulo/SP</p>
                  <p class="text-gray-600">CEP: 01234-567</p>
                </div>
                <!-- Mapa (placeholder) -->
                <div
                  class="aspect-video bg-gray-200 rounded-lg overflow-hidden"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1598042019247!2d-46.6549678!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzknMTcuOSJX!5e0!3m2!1spt-BR!2sbr!4v1635789876543!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </UCard>

            <!-- Contatos Diretos -->
            <UCard>
              <template #header>
                <h2
                  class="text-xl font-semibold text-gray-800 flex items-center gap-2"
                >
                  <UIcon
                    name="i-heroicons-phone"
                    class="w-6 h-6 text-primary-500"
                  />
                  Contatos Diretos
                </h2>
              </template>
              <div class="p-6 space-y-4">
                <div class="flex items-center gap-3">
                  <UIcon
                    name="i-heroicons-phone"
                    class="w-5 h-5 text-primary-500"
                  />
                  <div>
                    <p class="text-gray-800 font-medium">Telefone</p>
                    <p class="text-gray-600">(11) 5555-1234</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <UIcon
                    name="i-heroicons-device-phone-mobile"
                    class="w-5 h-5 text-primary-500"
                  />
                  <div>
                    <p class="text-gray-800 font-medium">WhatsApp</p>
                    <p class="text-gray-600">(11) 99999-8888</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <UIcon
                    name="i-heroicons-envelope"
                    class="w-5 h-5 text-primary-500"
                  />
                  <div>
                    <p class="text-gray-800 font-medium">Email</p>
                    <p class="text-gray-600">contato@pizzacastelo.com</p>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </div>
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
import { ref, reactive } from "vue";

definePageMeta({
  title: "Contato - Pizza Castelo",
  description:
    "Entre em contato com a Pizza Castelo. Estamos aqui para atender você!",
});

const form = reactive({
  nome: "",
  email: "",
  assunto: "",
  mensagem: "",
});

const enviando = ref(false);

const assuntos = [
  { label: "Dúvida", value: "duvida" },
  { label: "Sugestão", value: "sugestao" },
  { label: "Reclamação", value: "reclamacao" },
  { label: "Elogio", value: "elogio" },
  { label: "Outros", value: "outros" },
];

async function enviarMensagem() {
  enviando.value = true;
  try {
    // Simulando envio
    await new Promise((resolve) => setTimeout(resolve, 1500));

    useToast().add({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Retornaremos em breve!",
      color: "success",
    });

    // Limpar formulário
    form.nome = "";
    form.email = "";
    form.assunto = "";
    form.mensagem = "";
  } catch (error) {
    console.error(error);
    useToast().add({
      title: "Erro ao enviar",
      description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
      color: "error",
    });
  } finally {
    enviando.value = false;
  }
}
</script>
