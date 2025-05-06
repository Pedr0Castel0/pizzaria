<template>
  <div class="flex flex-col min-h-screen bg-[#FEF2F2]">
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

      <form
        class="max-w-2xl mx-auto space-y-6"
        @submit.prevent="handleRegister"
      >
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
                :model-value="form.nome"
                placeholder="Digite seu nome"
                class="w-full"
                @update:model-value="(value) => debounceUpdate('nome', value as string)"
              />
            </UFormField>

            <UFormField label="Senha" required>
              <UInput
                :model-value="form.senha"
                type="password"
                placeholder="Digite sua senha"
                class="w-full"
                @update:model-value="(value) => debounceUpdate('senha', value as string)"
              />
            </UFormField>

            <UFormField label="Email" required>
              <UInput
                :model-value="form.email"
                type="email"
                placeholder="exemplo@email.com"
                class="w-full"
                @update:model-value="(value) => debounceUpdate('email', value as string)"
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
                  :model-value="form.cep"
                  placeholder="00000-000"
                  maxlength="9"
                  pattern="\d{5}-?\d{3}"
                  class="w-full"
                  @update:model-value="(value) => debounceUpdate('cep', value as string)"
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
                  :model-value="form.endereco"
                  placeholder="Rua, Avenida, etc"
                  class="w-full"
                  @update:model-value="
                    (value) => debounceUpdate('endereco', value as string)
                  "
                />
              </UFormField>
              <UFormField label="Número" class="md:col-span-1" required>
                <UInput
                  :model-value="form.numero"
                  placeholder="Número"
                  class="w-full"
                  @update:model-value="
                    (value) => debounceUpdate('numero', value as string)
                  "
                />
              </UFormField>
            </div>

            <!-- Complemento e Bairro -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UFormField label="Complemento">
                <UInput
                  :model-value="form.complemento"
                  placeholder="Apto, bloco, referência"
                  class="w-full"
                  @update:model-value="
                    (value) => debounceUpdate('complemento', value as string)
                  "
                />
              </UFormField>
              <UFormField label="Bairro">
                <UInput
                  :model-value="form.bairro"
                  placeholder="Bairro"
                  class="w-full"
                  @update:model-value="
                    (value) => debounceUpdate('bairro', value as string)
                  "
                />
              </UFormField>
            </div>

            <!-- Cidade e Estado -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <UFormField label="Cidade" class="md:col-span-3" required>
                <UInput
                  :model-value="form.cidade"
                  placeholder="Cidade"
                  class="w-full"
                  @update:model-value="
                    (value) => debounceUpdate('cidade', value as string)
                  "
                />
              </UFormField>
              <UFormField label="Estado" class="md:col-span-1" required>
                <USelect
                  v-model="form.estado"
                  :items="estados"
                  arrow
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
            v-if="formComplete"
            :loading="loading"
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
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { register } = useAuth();
const loading = ref(false);

const formComplete = computed(() => {
  return Boolean(
    form.value.nome &&
      form.value.email &&
      form.value.senha &&
      form.value.cep &&
      form.value.endereco &&
      form.value.numero &&
      form.value.cidade &&
      form.value.estado
  );
});

definePageMeta({ layout: "auth" });
const form = ref({
  nome: "",
  email: "",
  senha: "",
  cep: "",
  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  estado: "",
});

const debounceTimeout = ref<NodeJS.Timeout | null>(null);

function debounceUpdate(field: string, value: string) {
  if (debounceTimeout.value) {
    clearTimeout(debounceTimeout.value);
  }

  debounceTimeout.value = setTimeout(() => {
    form.value[field as keyof typeof form.value] = value;
  }, 300);
}

async function handleRegister() {
  try {
    loading.value = true;
    await register(form.value);
    useToast().add({
      title: "Cadastro realizado com sucesso",
      description: "Você será redirecionado para o login",
      color: "success",
    });
    router.push("/login");
  } catch (error: unknown) {
    console.log("EEROR", error);

    useToast().add({
      title: "Erro ao fazer cadastro",
      description:
        error &&
        typeof error === "object" &&
        "data" in error &&
        error.data !== null &&
        typeof error.data === "object" &&
        "detail" in error.data
          ? String(error.data.detail)
          : "Ocorreu um erro ao fazer o cadastro",
      color: "error",
    });
  } finally {
    loading.value = false;
  }
}

const buscandoCep = ref(false);

async function buscarCep() {
  buscandoCep.value = true;
  try {
    const response = await fetch(
      `https://viacep.com.br/ws/${form.value.cep}/json/`
    );
    const data = await response.json();
    if (data.erro) {
      throw new Error("CEP inválido");
    }
    form.value.endereco = data.logradouro;
    form.value.bairro = data.bairro;
    form.value.cidade = data.localidade;
    form.value.estado = data.uf;
  } catch (error: unknown) {
    useToast().add({
      title: "Erro ao buscar CEP",
      description: error instanceof Error ? error.message : "Tente novamente",
      color: "error",
    });
  } finally {
    buscandoCep.value = false;
  }
}

const estados = ref([
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
] satisfies { label: string; value: string }[]);
</script>
