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
        class="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
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
              <UButton
                color="primary"
                :disabled="!isFormValid || !cartItems.length"
                @click="continuarPagamento"
              >
                Continuar para Pagamento
              </UButton>
            </div>
          </UCard>
        </div>

        <!-- Resumo do Pedido -->
        <div class="lg:col-span-1 sticky top-20">
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
            <UCard class="p-6">
              <template #header>
                <h2 class="text-2xl font-bold text-gray-900">
                  Forma de Pagamento
                </h2>
              </template>

              <div class="space-y-8">
                <!-- Métodos de Pagamento -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- Pagamento Online -->
                  <div
                    class="relative p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md"
                    :class="{
                      'border-primary-500 bg-primary-50':
                        form.pagamento === 'online',
                      'border-gray-200': form.pagamento !== 'online',
                    }"
                    @click="form.pagamento = 'online'"
                  >
                    <div class="flex items-start gap-3">
                      <div
                        class="w-10 h-10 rounded-full flex items-center justify-center"
                        :class="{
                          'bg-primary-100': form.pagamento === 'online',
                          'bg-gray-100': form.pagamento !== 'online',
                        }"
                      >
                        <UIcon
                          name="i-heroicons-qr-code"
                          class="w-6 h-6"
                          :class="{
                            'text-primary-600': form.pagamento === 'online',
                            'text-gray-600': form.pagamento !== 'online',
                          }"
                        />
                      </div>
                      <div>
                        <h3
                          class="font-semibold"
                          :class="{
                            'text-primary-900': form.pagamento === 'online',
                            'text-gray-900': form.pagamento !== 'online',
                          }"
                        >
                          Pagamento Online
                        </h3>
                        <p class="text-sm text-gray-600 mt-1">
                          Pague com PIX ou cartão de crédito
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Pagamento na Entrega -->
                  <div
                    class="relative p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md"
                    :class="{
                      'border-primary-500 bg-primary-50':
                        form.pagamento === 'entrega',
                      'border-gray-200': form.pagamento !== 'entrega',
                    }"
                    @click="form.pagamento = 'entrega'"
                  >
                    <div class="flex items-start gap-3">
                      <div
                        class="w-10 h-10 rounded-full flex items-center justify-center"
                        :class="{
                          'bg-primary-100': form.pagamento === 'entrega',
                          'bg-gray-100': form.pagamento !== 'entrega',
                        }"
                      >
                        <UIcon
                          name="i-heroicons-truck"
                          class="w-6 h-6"
                          :class="{
                            'text-primary-600': form.pagamento === 'entrega',
                            'text-gray-600': form.pagamento !== 'entrega',
                          }"
                        />
                      </div>
                      <div>
                        <h3
                          class="font-semibold"
                          :class="{
                            'text-primary-900': form.pagamento === 'entrega',
                            'text-gray-900': form.pagamento !== 'entrega',
                          }"
                        >
                          Pagamento na Entrega
                        </h3>
                        <p class="text-sm text-gray-600 mt-1">
                          Pague quando receber seu pedido
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- QR Code (se pagamento online) -->
                <div
                  v-if="form.pagamento === 'online'"
                  class="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <h3 class="text-lg font-medium text-gray-900 mb-4">
                    Escaneie para pagar
                  </h3>
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
                  <h3 class="text-lg font-medium text-gray-900">
                    Escolha a forma de pagamento
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Dinheiro -->
                    <div
                      class="relative p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md"
                      :class="{
                        'border-primary-500 bg-primary-50':
                          form.pagamentoEntrega === 'dinheiro',
                        'border-gray-200': form.pagamentoEntrega !== 'dinheiro',
                      }"
                      @click="form.pagamentoEntrega = 'dinheiro'"
                    >
                      <div class="flex items-start gap-3">
                        <div
                          class="w-10 h-10 rounded-full flex items-center justify-center"
                          :class="{
                            'bg-primary-100':
                              form.pagamentoEntrega === 'dinheiro',
                            'bg-gray-100': form.pagamentoEntrega !== 'dinheiro',
                          }"
                        >
                          <UIcon
                            name="i-heroicons-banknotes"
                            class="w-6 h-6"
                            :class="{
                              'text-primary-600':
                                form.pagamentoEntrega === 'dinheiro',
                              'text-gray-600':
                                form.pagamentoEntrega !== 'dinheiro',
                            }"
                          />
                        </div>
                        <div>
                          <h3
                            class="font-semibold"
                            :class="{
                              'text-primary-900':
                                form.pagamentoEntrega === 'dinheiro',
                              'text-gray-900':
                                form.pagamentoEntrega !== 'dinheiro',
                            }"
                          >
                            Dinheiro
                          </h3>
                          <p class="text-sm text-gray-600 mt-1">
                            Pague em dinheiro na entrega
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- Cartão -->
                    <div
                      class="relative p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md"
                      :class="{
                        'border-primary-500 bg-primary-50':
                          form.pagamentoEntrega === 'cartao',
                        'border-gray-200': form.pagamentoEntrega !== 'cartao',
                      }"
                      @click="form.pagamentoEntrega = 'cartao'"
                    >
                      <div class="flex items-start gap-3">
                        <div
                          class="w-10 h-10 rounded-full flex items-center justify-center"
                          :class="{
                            'bg-primary-100':
                              form.pagamentoEntrega === 'cartao',
                            'bg-gray-100': form.pagamentoEntrega !== 'cartao',
                          }"
                        >
                          <UIcon
                            name="i-heroicons-credit-card"
                            class="w-6 h-6"
                            :class="{
                              'text-primary-600':
                                form.pagamentoEntrega === 'cartao',
                              'text-gray-600':
                                form.pagamentoEntrega !== 'cartao',
                            }"
                          />
                        </div>
                        <div>
                          <h3
                            class="font-semibold"
                            :class="{
                              'text-primary-900':
                                form.pagamentoEntrega === 'cartao',
                              'text-gray-900':
                                form.pagamentoEntrega !== 'cartao',
                            }"
                          >
                            Cartão de Crédito/Débito
                          </h3>
                          <p class="text-sm text-gray-600 mt-1">
                            Pague com cartão na entrega
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Input de Troco (se dinheiro) -->
                  <div
                    v-if="form.pagamentoEntrega === 'dinheiro'"
                    class="mt-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <UFormField label="Troco para quanto?">
                      <div class="relative">
                        <span
                          class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                          R$
                        </span>
                        <UInput
                          v-model="form.trocoPara"
                          type="number"
                          placeholder="0,00"
                          class="w-full pl-8"
                        />
                      </div>
                    </UFormField>
                  </div>
                </div>

                <!-- Mensagem de Erro -->
                <div
                  v-if="showError.value"
                  class="p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-exclamation-circle"
                      class="w-5 h-5 text-red-500"
                    />
                    <p class="text-sm text-red-600">
                      Por favor, selecione uma forma de pagamento válida
                    </p>
                  </div>
                </div>

                <!-- Botão de Confirmação -->
                <div class="flex justify-end">
                  <UButton
                    color="primary"
                    size="lg"
                    :disabled="!isPagamentoValid"
                    @click="confirmarPagamento"
                  >
                    Confirmar Forma de Pagamento
                  </UButton>
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
            </UCard>
          </div>
        </div>
      </div>
      <div v-if="currentStep === 2">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Resumo do Pedido -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Lista de Produtos -->
            <UCard>
              <template #header>
                <h2 class="text-xl font-semibold">Seu Pedido</h2>
              </template>

              <div class="space-y-4">
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
                        <p class="text-sm text-gray-600">
                          {{ item.quantity }}x R$ {{ item.price.toFixed(2) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <!-- Informações de Entrega -->
            <UCard>
              <template #header>
                <h2 class="text-xl font-semibold">Entrega</h2>
              </template>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-map-pin"
                    class="w-6 h-6 text-gray-400 mt-1"
                  />
                  <div>
                    <p class="font-medium">
                      {{ form.endereco }}, {{ form.numero }}
                    </p>
                    <p class="text-sm text-gray-600">
                      {{ form.complemento ? `${form.complemento} - ` : "" }}
                      {{ form.bairro }}
                    </p>
                    <p class="text-sm text-gray-600">
                      {{ form.cidade }} - {{ form.estado }}
                    </p>
                    <p class="text-sm text-gray-600">CEP: {{ form.cep }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-truck"
                    class="w-6 h-6 text-gray-400 mt-1"
                  />
                  <div>
                    <p class="font-medium">
                      {{
                        deliveryOptions.find(
                          (opt) => opt.value === form.opcaoEntrega
                        )?.label
                      }}
                    </p>
                    <p class="text-sm text-gray-600">
                      {{
                        deliveryOptions.find(
                          (opt) => opt.value === form.opcaoEntrega
                        )?.description
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </UCard>

            <!-- Informações de Pagamento -->
            <UCard>
              <template #header>
                <h2 class="text-xl font-semibold">Pagamento</h2>
              </template>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon
                    :name="
                      form.pagamento === 'online'
                        ? 'i-heroicons-qr-code'
                        : 'i-heroicons-credit-card'
                    "
                    class="w-6 h-6 text-gray-400 mt-1"
                  />
                  <div>
                    <p class="font-medium">
                      {{
                        form.pagamento === "online"
                          ? "Pagamento Online"
                          : "Pagamento na Entrega"
                      }}
                    </p>
                    <p class="text-sm text-gray-600">
                      {{
                        form.pagamentoEntrega === "dinheiro"
                          ? "Dinheiro"
                          : "Cartão de Crédito/Débito"
                      }}
                    </p>
                    <p
                      v-if="
                        form.pagamentoEntrega === 'dinheiro' && form.trocoPara
                      "
                      class="text-sm text-gray-600"
                    >
                      Troco para: R$ {{ form.trocoPara }}
                    </p>
                  </div>
                </div>
              </div>
            </UCard>
          </div>

          <!-- Resumo de Valores -->
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
                <div class="space-y-4">
                  <UButton
                    color="primary"
                    block
                    size="lg"
                    @click="finalizarPedido"
                  >
                    Confirmar Pedido
                  </UButton>
                  <UButton
                    color="neutral"
                    variant="ghost"
                    block
                    @click="currentStep = 0"
                  >
                    Editar Pedido
                  </UButton>
                </div>
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
import { useAddress } from "@/composables/useAddress";
import { usePedido } from "@/composables/usePedido";
const toast = useToast();

interface AddressResponse {
  status: string;
  endereco: {
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
}

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

const showError = ref(false);

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
  if (!isPagamentoValid.value) {
    showError.value = true;
    return;
  }
  showError.value = false;
  currentStep.value = 2;
}

function finalizarPedido() {
  const { criarPedido } = usePedido();
  criarPedido(cartItems.value.map((item) => item.name));

  cartStore.clear();
  cartItems.value = [];
  currentStep.value = 0;
  toast.add({
    title: "Pedido realizado com sucesso",
    description: "Seu pedido foi enviado para a cozinha",
    icon: "i-heroicons-check-circle",
    color: "success",
    duration: 5000,
  });
}

async function getAddress() {
  const { getAddress } = useAddress();
  const address = (await getAddress()) as AddressResponse;
  if (address?.status === "sucesso") {
    form.cep = address.endereco.cep;
    form.endereco = address.endereco.endereco;
    form.numero = address.endereco.numero;
    form.complemento = address.endereco.complemento;
    form.bairro = address.endereco.bairro;
    form.cidade = address.endereco.cidade;
    form.estado = address.endereco.estado;
  }
  console.log(address);
}

onMounted(() => {
  getAddress();
});
</script>
