<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import type { Chat } from '~/types'

defineProps<{
  isOpen: boolean
}>()

const { chats } = useChats()
const route = useRoute()

function formatChatItem(chat: Chat): NavigationMenuItem {
  return {
    label: chat.title || 'Untitled Chat',
    to: `/chats/${chat.id}`,
    active: route.params.id === chat.id,
  }
}

const formattedChats = computed(() => chats.value.map(formatChatItem))
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
        <UNavigationMenu
          orientation="vertical"
          class="mb-4 w-full"
          :items="formattedChats"
          default-open
        />
      </div>
    </div>
  </aside>
</template>
