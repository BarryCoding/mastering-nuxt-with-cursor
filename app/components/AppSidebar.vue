<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import type { Chat } from '~/types'

defineProps<{
  isOpen: boolean
}>()

const route = useRoute()
const { chats } = useChats()

const chatsWithoutProject = computed(() =>
  chats.value.filter(c => c.projectId === undefined),
)

// computed factory function for filtering chats by date range
function filterChats(startDays: number, endDays?: number) {
  return computed(() => {
    return filterChatsByDateRange(
      chatsWithoutProject.value,
      startDays,
      endDays,
    ).map(formatChatItem)
  })
}

const todayChats = filterChats(-1, 1)
const lastWeekChats = filterChats(1, 7)
const lastMonthChats = filterChats(7, 30)
const olderChats = filterChats(30)

function formatChatItem(chat: Chat): NavigationMenuItem {
  return {
    label: chat.title || 'Untitled Chat',
    to: `/chats/${chat.id}`,
    active: route.params.id === chat.id,
  }
}
</script>

<template>
  <aside
    class="fixed top-16 bottom-0 left-0 z-40 w-64 border-r border-r-(--ui-border) bg-(--ui-bg-muted) transition-transform duration-300"
    :class="{ '-translate-x-full': !isOpen }"
  >
    <div v-if="chatsWithoutProject.length > 0" class="overflow-y-auto p-4">
      <div v-if="todayChats.length > 0" class="mb-4">
        <div class="mb-2 flex items-center justify-between">
          <h2 class="text-sm font-semibold text-(--ui-text-muted)">Today</h2>
        </div>
        <UNavigationMenu
          orientation="vertical"
          class="mb-4 w-full"
          :items="todayChats"
          default-open
        />
      </div>

      <div v-if="lastWeekChats.length > 0" class="mb-4">
        <div class="mb-2 flex items-center justify-between">
          <h2 class="text-sm font-semibold text-(--ui-text-muted)">
            Last 7 Days
          </h2>
        </div>
        <UNavigationMenu
          orientation="vertical"
          class="mb-4 w-full"
          :items="lastWeekChats"
          default-open
        />
      </div>

      <div v-if="lastMonthChats.length > 0" class="mb-4">
        <div class="mb-2 flex items-center justify-between">
          <h2 class="text-sm font-semibold text-(--ui-text-muted)">
            Last 30 Days
          </h2>
        </div>
        <UNavigationMenu
          orientation="vertical"
          class="mb-4 w-full"
          :items="lastMonthChats"
          default-open
        />
      </div>

      <div v-if="olderChats.length > 0" class="mb-4">
        <div class="mb-2 flex items-center justify-between">
          <h2 class="text-sm font-semibold text-(--ui-text-muted)">Older</h2>
        </div>
        <UNavigationMenu
          orientation="vertical"
          class="mb-4 w-full"
          :items="olderChats"
          default-open
        />
      </div>
    </div>
  </aside>
</template>
