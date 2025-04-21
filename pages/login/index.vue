<template>
  <div
    class="min-h-screen flex items-center bg-[#FEF2F2] dark:bg-gray-900 justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <UCard class="w-full max-w-md p-6 bg-white dark:bg-gray-800">
      <div class="flex flex-col items-center space-y-6">
        <div class="flex items-center gap-2">
          <img src="/images/logo.png" alt="Pizza Castelo" class="h-14" />
          <span class="text-red-500 dark:text-red-400 text-2xl font-bold"
            >Pizza Castelo</span
          >
        </div>

        <div class="text-center w-full">
          <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Entre em sua conta
          </h2>
        </div>

        <form class="space-y-4 w-full">
          <UFormField label="Email" class="text-gray-700 dark:text-gray-300">
            <UInput placeholder="seu@email.com" class="w-full" />
          </UFormField>

          <UFormField label="Senha" class="text-gray-700 dark:text-gray-300">
            <UInput type="password" placeholder="••••••••" class="w-full" />
          </UFormField>
          <div class="flex justify-between items-center">
            <UCheckbox
              label="Lembrar de mim"
              class="text-gray-700 dark:text-gray-300 w-full"
            />
            <UButton
              type="button"
              variant="link"
              color="error"
              class="text-sm w-full justify-end"
            >
              Esqueceu a senha?
            </UButton>
          </div>

          <UButton
            type="submit"
            color="primary"
            variant="solid"
            block
            class="mt-4"
            :loading="loading"
            @click="handleSubmit"
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
                >Ou continue com</span
              >
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

        <div class="text-center text-sm">
          <span class="text-gray-600 dark:text-gray-400"
            >Não tem uma conta?</span
          >
          <NuxtLink
            to="/register"
            class="text-red-500 dark:text-red-400 font-semibold ml-1"
          >
            Cadastre-se agora
          </NuxtLink>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false);

const handleSubmit = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    navigateTo("/");
    useToast().add({
      title: "Login realizado com sucesso",
      description: "Você foi redirecionado para a página inicial",
      color: "success",
    });
  }, 2000);
};
</script>
