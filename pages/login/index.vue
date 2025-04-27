<template>
  <div
    class="min-h-screen flex items-center bg-[#FEF2F2] dark:bg-gray-900 justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <UCard class="w-full max-w-md p-6 bg-white dark:bg-gray-800">
      <div class="flex flex-col items-center space-y-6">
        <div class="flex items-center gap-2">
          <img src="/images/logo.png" alt="Pizza Castelo" class="h-14" />
          <span class="text-red-500 dark:text-red-400 text-2xl font-bold">
            Pizza Castelo
          </span>
        </div>

        <h2
          class="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center"
        >
          Entre em sua conta
        </h2>

        <form class="space-y-4 w-full" @submit.prevent="handleLogin">
          <UFormField label="Email">
            <UInput
              v-model="email"
              type="email"
              name="email"
              autocomplete="email"
              required
              class="w-full"
            />
          </UFormField>

          <UFormField label="Senha">
            <UInput
              v-model="senha"
              type="password"
              name="password"
              autocomplete="current-password"
              required
              class="w-full"
            />
          </UFormField>

          <div class="flex justify-between items-center">
            <UCheckbox v-model="lembrar" label="Lembrar de mim" />
          </div>
          <UButton
            type="submit"
            color="primary"
            variant="solid"
            block
            :loading="loading"
            :disabled="loading"
          >
            Entrar
          </UButton>
        </form>

        <div class="w-full">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div
                class="w-full border-t border-gray-200 dark:border-gray-700"
              ></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span
                class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400"
              >
                Ou continue com
              </span>
            </div>
          </div>

          <div
            class="mt-6 grid grid-flow-col justify-center auto-cols-max gap-3"
          >
            <UButton
              icon="i-simple-icons-google"
              size="md"
              color="neutral"
              variant="outline"
            />
            <UButton
              icon="i-simple-icons-facebook"
              size="md"
              color="neutral"
              variant="outline"
            />
            <UButton
              icon="i-simple-icons-apple"
              size="md"
              color="neutral"
              variant="outline"
            />
          </div>
        </div>

        <p class="text-center text-sm text-gray-600 dark:text-gray-400">
          Não tem uma conta?
          <NuxtLink
            to="/register"
            class="text-red-500 dark:text-red-400 font-semibold ml-1"
          >
            Cadastre-se agora
          </NuxtLink>
        </p>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";

definePageMeta({
  layout: "auth",
});

const router = useRouter();
const toast = useToast();
const { login } = useAuth();

const email = ref("");
const senha = ref("");
const lembrar = ref(false);
const loading = ref(false);

async function handleLogin() {
  loading.value = true;
  try {
    await login(email.value, senha.value);
    router.push("/");
    toast.add({
      title: "Login realizado com sucesso",
      description: "Você foi redirecionado para a página inicial",
      color: "success",
    });
  } catch (err: unknown) {
    toast.add({
      title: "Erro ao fazer login",
      description: err instanceof Error ? err.message : "Tente novamente",
      color: "error",
    });
  } finally {
    loading.value = false;
  }
}
</script>
