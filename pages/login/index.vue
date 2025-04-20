<template>
  <div class="min-h-screen flex items-center justify-center bg-[#fef2f2] px-4">
    <div
      class="bg-white border-2 border-red-500 rounded-[2rem] shadow-lg w-full max-w-sm px-8 py-10"
    >
      <!-- Logo e título -->
      <div class="text-center mb-6">
        <img src="/images/logo.png" alt="Pizza Castelo" class="mx-auto h-10" />
        <h1 class="text-xl font-bold text-red-600 mt-2">Pizza Castelo</h1>
      </div>

      <!-- Subtítulo -->
      <h2 class="text-center text-base font-semibold text-gray-800 mb-6">
        Entre em sua conta
      </h2>

      <!-- Formulário -->
      <form class="space-y-4" @submit.prevent="handleLogin">
        <!-- Email -->
        <div>
          <label for="email" class="text-sm text-gray-700 block mb-1"
            >Email</label
          >
          <UInput
            id="email"
            v-model="form.email"
            type="email"
            placeholder="seu@email.com"
            class="w-full"
          />
        </div>

        <!-- Senha + Esqueceu -->
        <div>
          <div class="flex justify-between items-center mb-1">
            <label for="password" class="text-sm text-gray-700">Senha</label>
            <NuxtLink
              to="/esqueceu-senha"
              class="text-xs text-red-600 hover:underline"
            >
              Esqueceu a senha?
            </NuxtLink>
          </div>
          <UInput
            id="password"
            v-model="form.password"
            type="password"
            placeholder="••••••••"
            class="w-full"
          />
        </div>

        <!-- Lembrar -->

        <UCheckbox
          id="remember"
          v-model="form.remember"
          color="neutral"
          label="Lembrar de mim"
          class="text-gray-700"
        />

        <!-- Botão -->
        <button
          type="submit"
          class="w-full bg-red-600 text-white rounded-full py-2 text-sm font-medium hover:bg-red-700 transition"
        >
          Entrar
        </button>
      </form>

      <!-- Separador -->
      <div class="flex items-center my-6">
        <div class="h-px bg-gray-200 flex-1"></div>
        <span class="mx-3 text-xs text-gray-400">Ou continue com</span>
        <div class="h-px bg-gray-200 flex-1"></div>
      </div>

      <!-- Social -->
      <div class="flex justify-center space-x-4">
        <button
          class="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Icon name="fa6-brands:google" class="text-lg" />
        </button>
        <button
          class="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Icon name="fa6-brands:facebook-f" class="text-lg" />
        </button>
        <button
          class="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Icon name="fa6-brands:apple" class="text-lg" />
        </button>
      </div>

      <!-- Cadastro -->
      <p class="text-center text-sm text-gray-600 mt-6">
        Não tem uma conta?
        <NuxtLink
          to="/register"
          class="text-red-600 font-medium hover:underline"
        >
          Cadastre-se agora
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  email: "",
  password: "",
});

function handleLogin() {
  console.log("Login:", form);
}
</script>
