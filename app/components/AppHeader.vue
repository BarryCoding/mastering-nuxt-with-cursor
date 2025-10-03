<script setup lang="ts">
const appConfig = useAppConfig()
const { createChatAndNavigate } = useChats()

async function handleCreateChat() {
  await createChatAndNavigate()
}
</script>

<template>
  <header class="app-header">
    <div class="header-left">
      <UButton icon="i-lucide-menu" color="primary" variant="soft" />
      <UButton icon="i-lucide-plus" @click="handleCreateChat">
        New Chat
      </UButton>
    </div>
    <div class="header-title">
      {{ appConfig.title }}
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem; /* 16 * 0.25 = 4rem */
  background-color: var(--ui-bg-muted);
  border-bottom: 1px solid var(--ui-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  z-index: 50;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-title {
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
}
</style>
