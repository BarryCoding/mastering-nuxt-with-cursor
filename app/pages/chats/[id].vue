<script setup lang="ts">
const { id } = useRoute().params

const appConfig = useAppConfig()
const { chat, chatMessages, sendMessage } = useChat(id as string)

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
    v-if="chat"
    :is-typing="isTyping"
    :chat
    :chat-messages="chatMessages"
    @send-message="handleSendMessage"
  />
</template>
