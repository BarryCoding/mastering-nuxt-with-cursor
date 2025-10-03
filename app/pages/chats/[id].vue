<script setup lang="ts">
const { id } = useRoute().params
console.warn(`🤖 ~ id:`, id)

const appConfig = useAppConfig()
const { chat, chatMessages, sendMessage } = useChat()

const title = computed(() =>
  chat.value?.title
    ? `${chat.value.title} - ${appConfig.title}`
    : appConfig.title,
)

const isTyping = ref(false)

async function handleSendMessage(message: string) {
  isTyping.value = true
  await sendMessage(message)
  isTyping.value = false
}

useHead({ title })
</script>

<template>
  <ChatWindow
    :is-typing="isTyping"
    :chat
    :chat-messages="chatMessages"
    @send-message="handleSendMessage"
  />
</template>
