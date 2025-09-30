<script setup lang="ts">
const { chat, chatMessages, sendMessage } = useChat()

useHeadSafe({
  title: chat.value.title,
})
</script>

<template>
  <ChatWindow :chat :chat-messages="chatMessages" @send-message="sendMessage" />
</template>
