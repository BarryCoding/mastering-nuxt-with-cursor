<script setup lang="ts">
const appConfig = useAppConfig()
const { createChat } = useChats()

function handleCreateChat() {
  createChat()
}
</script>

<template>
  <UContainer class="flex min-h-screen flex-col items-center justify-center">
    <span class="mb-2 text-2xl font-bold">{{ appConfig.title }}</span>
    <UButton class="mt-4" @click="handleCreateChat"> Start Chat </UButton>
  </UContainer>
</template>
