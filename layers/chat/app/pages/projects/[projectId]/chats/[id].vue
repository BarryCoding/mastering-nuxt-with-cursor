<script setup lang="ts">
const route = useRoute()
const { chat, chatMessages, sendMessage, fetchMessages } = useChat(
  route.params.id as string,
)

await fetchMessages()

if (!chat.value) {
  await navigateTo('/', { replace: true })
}

const isTyping = ref(false)

async function handleSendMessage(message: string) {
  isTyping.value = true
  await sendMessage(message)
  isTyping.value = false
}

const appConfig = useAppConfig()
const title = computed(() =>
  chat.value?.title
    ? `${chat.value.title} - ${appConfig.title}`
    : appConfig.title,
)

useHead({
  title,
})
</script>

<template>
  <ChatWindow
    v-if="chat"
    :is-typing="isTyping"
    :chat
    :chat-messages="chatMessages"
    @send-message="handleSendMessage"
  />
</template>
