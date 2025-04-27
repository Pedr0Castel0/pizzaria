<template>
  <div class="min-h-screen bg-gray-50">
    <UContainer class="py-8">
      <!-- Breadcrumb -->
      <div class="mb-6">
        <UBreadcrumb
          :items="[
            { label: 'Início', to: '/' },
            { label: 'Cardápio', to: '/cardapio' },
            { label: 'Carrinho', to: '/carrinho' },
          ]"
        />
      </div>

      <!-- Progress Steps -->
      <div class="mb-8">
        <UStepper
          v-model="currentStep"
          :items="[
            { title: 'Entrega', description: 'Dados de entrega' },
            { title: 'Pagamento', description: 'Forma de pagamento' },
            { title: 'Confirmação', description: 'Resumo do pedido' },
          ]"
        />
      </div>

      <div
        v-if="currentStep === 0"
        class="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <!-- Carrinho e Formulário -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Lista de Produtos -->
          <UCard>
            <template #header>
              <div class="flex justify-between items-center">
                <h2 class="text-xl font-semibold">Carrinho</h2>
                <UButton
                  v-if="cartItems.length"
                  color="primary"
                  variant="ghost"
                  icon="i-heroicons-trash"
                  @click="clearCart"
                >
                  Limpar Carrinho
                </UButton>
              </div>
            </template>

            <div v-if="cartItems.length" class="space-y-4">
              <div
                v-for="item in cartItems"
                :key="item.id"
                class="flex gap-4 py-4 border-b last:border-0"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-24 h-24 object-cover rounded-lg"
                />
                <div class="flex-1">
                  <div class="flex justify-between">
                    <div>
                      <h3 class="font-medium">{{ item.name }}</h3>
                      <p class="text-sm text-gray-600">
                        {{ item.description }}
                      </p>
                      <p class="text-sm text-gray-500">{{ item.size }}</p>
                    </div>
                    <div class="text-right">
                      <p class="font-semibold">
                        R$ {{ (item.price * item.quantity).toFixed(2) }}
                      </p>
                      <div class="flex items-center gap-2 mt-2">
                        <UButton
                          color="neutral"
                          variant="ghost"
                          icon="i-heroicons-minus"
                          @click="updateQuantity(item.id, -1)"
                        />
                        <span class="w-8 text-center">{{ item.quantity }}</span>
                        <UButton
                          color="neutral"
                          variant="ghost"
                          icon="i-heroicons-plus"
                          @click="updateQuantity(item.id, 1)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="text-center py-8 text-gray-500">
              Seu carrinho está vazio
            </div>
          </UCard>

          <!-- Formulário de Entrega -->
          <UCard class="p-6 bg-white dark:bg-gray-800 space-y-6">
            <!-- Seção de Informações de Entrega -->
            <div>
              <h2 class="text-xl font-semibold text-gray-800">
                Informações de Entrega
              </h2>
              <div class="mt-4 space-y-4">
                <!-- CEP com botão Buscar -->
                <UFormField label="CEP" required>
                  <div class="flex space-x-4">
                    <UInput
                      v-model="form.cep"
                      placeholder="00000-000"
                      class="flex-1"
                    />
                    <UButton variant="outline" @click="buscarCEP"
                      >Buscar</UButton
                    >
                  </div>
                </UFormField>

                <!-- Endereço e Número -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div class="md:col-span-3">
                    <UFormField label="Endereço" required>
                      <UInput v-model="form.endereco" class="w-full" />
                    </UFormField>
                  </div>
                  <div>
                    <UFormField label="Número" required>
                      <UInput v-model="form.numero" class="w-full" />
                    </UFormField>
                  </div>
                </div>

                <!-- Complemento e Bairro -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="md:col-span-2">
                    <UFormField label="Complemento">
                      <UInput
                        v-model="form.complemento"
                        placeholder="Apto, bloco, referência"
                        class="w-full"
                      />
                    </UFormField>
                  </div>
                  <div>
                    <UFormField label="Bairro">
                      <UInput v-model="form.bairro" class="w-full" />
                    </UFormField>
                  </div>
                </div>

                <!-- Cidade e Estado -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="md:col-span-2">
                    <UFormField label="Cidade">
                      <UInput v-model="form.cidade" class="w-full" />
                    </UFormField>
                  </div>
                  <div>
                    <UFormField label="Estado">
                      <UInput v-model="form.estado" class="w-full" />
                    </UFormField>
                  </div>
                </div>
              </div>
            </div>

            <!-- Seção de Opções de Entrega -->
            <div>
              <h2 class="text-xl font-semibold text-gray-800">
                Opções de Entrega
              </h2>
              <URadioGroup
                v-model="form.opcaoEntrega"
                :items="deliveryOptions"
                class="mt-4 space-y-4"
              />
            </div>

            <!-- Botão de Continuação -->
            <div class="flex justify-end">
              <UButton @click="continuarPagamento">
                Continuar para Pagamento
                <UIcon name="arrow-right" class="ml-2" />
              </UButton>
            </div>
          </UCard>
        </div>

        <!-- Resumo do Pedido -->
        <div class="lg:col-span-1">
          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold">Resumo do Pedido</h2>
            </template>

            <div class="space-y-4">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span>R$ {{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between">
                <span>Taxa de Entrega</span>
                <span>R$ {{ taxaEntrega.toFixed(2) }}</span>
              </div>
              <div class="border-t pt-4">
                <div class="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>R$ {{ total.toFixed(2) }}</span>
                </div>
              </div>
            </div>

            <template #footer>
              <UButton
                color="primary"
                block
                :disabled="!isFormValid || !cartItems.length"
                @click="continuarPagamento"
              >
                Continuar para Pagamento
              </UButton>
            </template>
          </UCard>
        </div>
      </div>

      <div v-if="currentStep === 1">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Formulário de Pagamento -->
          <div class="lg:col-span-2">
            <UCard>
              <template #header>
                <h2 class="text-xl font-semibold">Forma de Pagamento</h2>
              </template>

              <div class="space-y-6">
                <!-- Pagamento Online -->
                <div>
                  <URadioGroup
                    v-model="form.pagamento"
                    :items="[
                      {
                        value: 'online',
                        label: 'Pagamento Online',
                        description: 'Pague com PIX ou cartão de crédito',
                      },
                      {
                        value: 'entrega',
                        label: 'Pagamento na Entrega',
                        description: 'Pague quando receber seu pedido',
                      },
                    ]"
                    class="space-y-4"
                  />
                </div>

                <!-- QR Code (se pagamento online) -->
                <div v-if="form.pagamento === 'online'" class="text-center">
                  <img
                    src="/pagamento/qrcode.png"
                    alt="QR Code para pagamento"
                    class="mx-auto w-64 h-64"
                  />
                  <p class="mt-4 text-sm text-gray-600">
                    Escaneie o QR Code para pagar com PIX
                  </p>
                </div>

                <!-- Opções de Pagamento na Entrega -->
                <div v-if="form.pagamento === 'entrega'" class="space-y-4">
                  <URadioGroup
                    v-model="form.pagamentoEntrega"
                    :items="[
                      {
                        value: 'dinheiro',
                        label: 'Dinheiro',
                        description: 'Pague em dinheiro na entrega',
                      },
                      {
                        value: 'cartao',
                        label: 'Cartão de Crédito/Débito',
                        description: 'Pague com cartão na entrega',
                      },
                    ]"
                    class="space-y-4"
                  />

                  <!-- Input de Troco (se dinheiro) -->
                  <div v-if="form.pagamentoEntrega === 'dinheiro'">
                    <UFormField label="Troco para quanto?">
                      <UInput
                        v-model="form.trocoPara"
                        type="number"
                        placeholder="0,00"
                        class="w-full"
                      />
                    </UFormField>
                  </div>
                </div>
              </div>
            </UCard>
          </div>

          <!-- Resumo do Pedido -->
          <div class="lg:col-span-1">
            <UCard>
              <template #header>
                <h2 class="text-xl font-semibold">Resumo do Pedido</h2>
              </template>

              <div class="space-y-4">
                <div class="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {{ subtotal.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Taxa de Entrega</span>
                  <span>R$ {{ taxaEntrega.toFixed(2) }}</span>
                </div>
                <div class="border-t pt-4">
                  <div class="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>R$ {{ total.toFixed(2) }}</span>
                  </div>
                </div>
              </div>

              <template #footer>
                <UButton
                  color="primary"
                  block
                  :disabled="!isPagamentoValid"
                  @click="confirmarPagamento"
                >
                  Confirmar Pedido
                </UButton>
              </template>
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useCartStore } from "~/stores/cart";

// Passos do checkout
const currentStep = ref(0);

// Estado do carrinho
interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
  size: string;
  info?: string;
}

const cartItems = ref<CartItem[]>([]);

// Carrega itens do localStorage ou API
const cartStore = useCartStore();
cartItems.value = cartStore.items;

// Formulário de entrega
interface DeliveryFormModel {
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  opcaoEntrega: string;
}

// Formulário de pagamento
interface PaymentFormModel {
  pagamento: "online" | "entrega" | null;
  pagamentoEntrega: "dinheiro" | "cartao" | null;
  trocoPara: string;
}

const form = reactive<DeliveryFormModel & PaymentFormModel>({
  cep: "",
  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  estado: "",
  opcaoEntrega: "padrao",
  pagamento: null,
  pagamentoEntrega: null,
  trocoPara: "",
});

const deliveryOptions = [
  {
    value: "padrao",
    label: "Entrega Padrão",
    description: "Receba em até 45 minutos",
  },
  {
    value: "expressa",
    label: "Entrega Expressa",
    description: "Receba em até 30 minutos",
  },
  {
    value: "gratis",
    label: "Entrega Grátis",
    description: "Acima de R$100 - até 60 minutos",
  },
];

// Cálculos de valores
const subtotal = computed(() =>
  cartItems.value.reduce((sum, i) => sum + i.price * i.quantity, 0)
);
const taxaEntrega = computed(() => {
  switch (form.opcaoEntrega) {
    case "expressa":
      return 15;
    case "gratis":
      return subtotal.value >= 100 ? 0 : 10;
    default:
      return 10;
  }
});
const total = computed(() => subtotal.value + taxaEntrega.value);

const isFormValid = computed(
  () => form.cep && form.endereco && form.numero && form.cidade && form.estado
);

// Validação do pagamento
const isPagamentoValid = computed(() => {
  if (!form.pagamento) return false;
  if (form.pagamento === "entrega" && !form.pagamentoEntrega) return false;
  if (
    form.pagamento === "entrega" &&
    form.pagamentoEntrega === "dinheiro" &&
    !form.trocoPara
  )
    return false;
  return true;
});

// Ações
function updateQuantity(id: number, delta: number) {
  const item = cartItems.value.find((i) => i.id === id);

  if (item) item.quantity = Math.max(0, item.quantity + delta);
  if (item && item.quantity === 0) {
    cartItems.value = cartItems.value.filter((i) => i.id !== id);
  }
}

function clearCart() {
  cartStore.clear();
  cartItems.value = [];
}

interface ViaCEPResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

async function buscarCEP() {
  if (!form.cep) return;
  try {
    const data = await $fetch<ViaCEPResponse>(
      `https://viacep.com.br/ws/${form.cep.replace(/\D/g, "")}/json/`
    );
    form.endereco = data.logradouro || "";
    form.bairro = data.bairro || "";
    form.cidade = data.localidade || "";
    form.estado = data.uf || "";
  } catch {
    // tratar erro
  }
}
function continuarPagamento() {
  currentStep.value = 1;
  // navegar para página de pagamento
}

function confirmarPagamento() {
  // Implementar lógica de confirmação
  currentStep.value = 2;
}
</script>
