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
</script>
