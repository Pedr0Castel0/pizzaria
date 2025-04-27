<template>
  <UApp>
    <AppHeader />
    <slot />
    <AppFooter />
  </UApp>
</template>

<script setup>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();

onMounted(() => {
  userStore.init();
});
</script>
