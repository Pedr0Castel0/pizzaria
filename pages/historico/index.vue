<template>
  <div class="min-h-screen bg-gray-50">
    <UContainer>
      <div class="py-8">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-2xl font-bold text-gray-900">Histórico de Pedidos</h1>
          <p class="mt-2 text-gray-600">Veja os itens que você já pediu</p>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center items-center py-12">
          <UIcon
            name="i-heroicons-arrow-path"
            class="w-8 h-8 animate-spin text-primary-500"
          />
        </div>

        <!-- Error State -->
        <UCard v-else-if="error" class="bg-red-50 border-red-200">
          <div class="flex items-center gap-3">
            <UIcon
              name="i-heroicons-exclamation-circle"
              class="w-6 h-6 text-red-500"
            />
            <div>
              <h3 class="font-medium text-red-800">
                Erro ao carregar histórico
              </h3>
              <p class="text-sm text-red-600">{{ error }}</p>
            </div>
          </div>
        </UCard>

        <!-- Empty State -->
        <UCard v-else-if="!historico.length" class="text-center py-12">
          <UIcon
            name="i-heroicons-shopping-bag"
            class="w-12 h-12 mx-auto text-gray-400"
          />
          <h3 class="mt-4 text-lg font-medium text-gray-900">
            Nenhum pedido encontrado
          </h3>
          <p class="mt-2 text-gray-600">
            Que tal fazer seu primeiro pedido? Temos pizzas deliciosas esperando
            por você!
          </p>
          <UButton to="/cardapio" color="primary" variant="solid" class="mt-6">
            Ver Cardápio
          </UButton>
        </UCard>

        <!-- Lista de Itens -->
        <div v-else class="space-y-4">
          <UCard
            v-for="(item, index) in historico"
            :key="index"
            class="hover:shadow-md transition-shadow"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <UIcon
                  name="i-heroicons-check-circle"
                  class="w-6 h-6 text-success-500"
                />
                <span class="font-medium text-gray-900">{{ item }}</span>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useHistory } from "~/composables/useHistory";

definePageMeta({
  layout: "default",
});

const { listarHistorico } = useHistory();
const loading = ref(true);
const error = ref<string | null>(null);
const historico = ref<string[]>([]);

// Carregar histórico
async function carregarHistorico() {
  try {
    loading.value = true;
    error.value = null;
    historico.value = await listarHistorico();
  } catch (err) {
    error.value =
      "Não foi possível carregar seu histórico. Tente novamente mais tarde.";
    console.error(err);
  } finally {
    loading.value = false;
  }
}

// Carregar histórico ao montar o componente
onMounted(() => {
  carregarHistorico();
});
</script>
