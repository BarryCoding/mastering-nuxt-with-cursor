<script setup lang="ts">
// Test runtimeConfig in client mode
// const runtimeConfig = useRuntimeConfig()
// console.warn(`🤖 ~ app.vue runtimeConfig:`, runtimeConfig)
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
