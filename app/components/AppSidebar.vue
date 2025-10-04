<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

const { chats } = useChats()
</script>

<template>
  <aside
    class="fixed top-16 bottom-0 left-0 z-40 w-64 border-r border-r-(--ui-border) bg-(--ui-bg-muted) transition-transform duration-300"
    :class="{ '-translate-x-full': !isOpen }"
  >
    <div class="overflow-y-auto p-4">
      <div class="mb-4">
        <div class="mb-2 flex items-center justify-between">
          <h2 class="text-sm font-semibold text-(--ui-text-muted)">Chats</h2>
        </div>
        <div class="space-y-1">
          <NuxtLink
            v-for="chat in chats"
            :key="chat.id"
            :to="`/chats/${chat.id}`"
            class="block rounded-md px-3 py-1 text-sm text-(--ui-text-muted) transition-colors duration-200 ease-in-out hover:bg-[var(--ui-bg-elevated)]"
            active-class="text-(--ui-text-primary) bg-(--ui-bg-elevated)"
          >
            {{ chat.title || 'Untitled Chat' }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </aside>
</template>
