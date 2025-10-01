<script setup lang="ts">
const appConfig = useAppConfig()
const { chat, chatMessages, sendMessage } = useChat()

const title = computed(() =>
  chat.value?.title
    ? `${chat.value.title} - ${appConfig.title}`
    : appConfig.title,
)

useHead({ title })
</script>

<template>
  <ChatWindow :chat :chat-messages="chatMessages" @send-message="sendMessage" />
</template>
