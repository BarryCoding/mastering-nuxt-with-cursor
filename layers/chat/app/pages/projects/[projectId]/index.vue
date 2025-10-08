<script setup lang="ts">
const route = useRoute()
const projectId = route.params.projectId as string

const { getChatsByProject } = useChats()

const chats = computed(() => getChatsByProject(projectId))
</script>

<template>
  <div>
    <div
      v-if="chats?.length"
      class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <NuxtLink
        v-for="chat in chats"
        :key="chat.id"
        :to="`/projects/${projectId}/chats/${chat.id}`"
      >
        <UCard class="h-full">
          <template #header>
            <h3 class="text-md font-medium">
              {{ chat.title || 'Untitled Chat' }}
            </h3>
          </template>
          <p
            v-if="chat.messages?.length"
            class="line-clamp-2 text-sm text-(--ui-text-dimmed)"
          >
            {{ chat.messages[chat.messages.length - 1]?.content }}
          </p>
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>
