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
      <NuxtLink
        to="/login"
        class="inline-flex items-center text-gray-600 mb-6 hover:underline"
      >
        <UIcon name="i-heroicons-arrow-left" class="w-5 h-5 mr-2" />
        Voltar para o Login
      </NuxtLink>

      <h1 class="text-2xl font-bold text-gray-900 mb-8">Cadastro</h1>

      <form class="max-w-2xl mx-auto space-y-6" @submit.prevent="handleSubmit">
        <!-- Informações Pessoais -->
        <UCard>
          <template #header>
            <h2 class="text-lg font-semibold text-gray-700">
              Informações Pessoais
            </h2>
          </template>
          <div class="space-y-4 p-6">
            <UFormField label="Nome" required>
              <UInput
                v-model="form.nome"
                placeholder="Digite seu nome"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Telefone" required>
              <UInput
                v-model="form.telefone"
                type="tel"
                placeholder="(00) 00000-0000"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Email" required>
              <UInput
                v-model="form.email"
                type="email"
                placeholder="exemplo@email.com"
                class="w-full"
              />
            </UFormField>
          </div>
        </UCard>

        <!-- Informações de Endereço -->
        <UCard>
          <template #header>
            <h2 class="text-lg font-semibold text-gray-700">
              Informações de Endereço Padrão
            </h2>
          </template>
          <div class="space-y-6 p-6">
            <!-- CEP + Buscar -->
            <div class="flex flex-col sm:flex-row sm:items-end gap-4">
              <UFormField label="CEP" class="flex-1" required>
                <UInput
                  v-model="form.cep"
                  placeholder="00000-000"
                  maxlength="9"
                  pattern="\d{5}-?\d{3}"
                  class="w-full"
                />
              </UFormField>
              <UButton
                type="button"
                color="neutral"
                variant="solid"
                size="md"
                class="w-auto h-10"
                :loading="buscandoCep"
                aria-label="Buscar CEP"
                @click="buscarCep"
              >
                Buscar
              </UButton>
            </div>

            <!-- Endereço e Número -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <UFormField label="Endereço" class="md:col-span-3" required>
                <UInput
                  v-model="form.endereco"
                  placeholder="Rua, Avenida, etc"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="Número" class="md:col-span-1" required>
                <UInput
                  v-model="form.numero"
                  placeholder="Número"
                  class="w-full"
                />
              </UFormField>
            </div>

            <!-- Complemento e Bairro -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UFormField label="Complemento">
                <UInput
                  v-model="form.complemento"
                  placeholder="Apto, bloco, referência"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="Bairro">
                <UInput
                  v-model="form.bairro"
                  placeholder="Bairro"
                  class="w-full"
                />
              </UFormField>
            </div>

            <!-- Cidade e Estado -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <UFormField label="Cidade" class="md:col-span-3" required>
                <UInput
                  v-model="form.cidade"
                  placeholder="Cidade"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="Estado" class="md:col-span-1" required>
                <USelectMenu
                  v-model="form.estado"
                  :items="estados"
                  class="w-full"
                  placeholder="Selecione"
                />
              </UFormField>
            </div>
          </div>
        </UCard>

        <!-- Submit -->
        <div class="flex justify-end">
          <UButton
            type="submit"
            color="primary"
            variant="solid"
            size="md"
            class="w-auto h-10"
          >
            Finalizar Cadastro
          </UButton>
        </div>
      </form>
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
import { reactive, ref } from "vue";

const form = reactive({
  nome: "",
  telefone: "",
  email: "",
  cep: "",
  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  estado: "",
});

const buscandoCep = ref(false);

async function buscarCep() {
  if (!form.cep) return;
  buscandoCep.value = true;
  try {
    const cepNum = form.cep.replace(/\D/g, "");
    const res = await fetch(`https://viacep.com.br/ws/${cepNum}/json/`);
    const data = await res.json();
    if (!data.erro) {
      form.endereco = data.logradouro;
      form.bairro = data.bairro;
      form.cidade = data.localidade;
      form.estado = data.uf;
    }
    if (data.erro) {
      useToast().add({
        title: "CEP não encontrado",
        description: "Por favor, tente novamente.",
        color: "error",
      });
      return;
    }
    useToast().add({
      title: "CEP encontrado",
      description: "Endereço encontrado com sucesso.",
      color: "success",
    });
  } catch (e) {
    useToast().add({
      title: "Erro ao buscar CEP",
      description: e.message,
      color: "error",
    });
  } finally {
    buscandoCep.value = false;
  }
}

async function handleSubmit() {
  // TODO: lógica de envio do formulário
  console.log("Dados do formulário:", { ...form });
}

const estados = [
  { label: "Acre", value: "AC" },
  { label: "Alagoas", value: "AL" },
  { label: "Amapá", value: "AP" },
  { label: "Amazonas", value: "AM" },
  { label: "Bahia", value: "BA" },
  { label: "Ceará", value: "CE" },
  { label: "Distrito Federal", value: "DF" },
  { label: "Espírito Santo", value: "ES" },
  { label: "Goiás", value: "GO" },
  { label: "Maranhão", value: "MA" },
  { label: "Mato Grosso", value: "MT" },
  { label: "Mato Grosso do Sul", value: "MS" },
  { label: "Minas Gerais", value: "MG" },
  { label: "Pará", value: "PA" },
  { label: "Paraíba", value: "PB" },
  { label: "Paraná", value: "PR" },
  { label: "Pernambuco", value: "PE" },
  { label: "Piauí", value: "PI" },
  { label: "Rio de Janeiro", value: "RJ" },
  { label: "Rio Grande do Norte", value: "RN" },
  { label: "Rio Grande do Sul", value: "RS" },
  { label: "Rondônia", value: "RO" },
  { label: "Roraima", value: "RR" },
  { label: "Santa Catarina", value: "SC" },
  { label: "São Paulo", value: "SP" },
  { label: "Sergipe", value: "SE" },
  { label: "Tocantins", value: "TO" },
];
</script>
