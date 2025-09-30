<script setup lang="ts">
const { chat, chatMessages, sendMessage } = useChat()
</script>

<template>
  <ChatWindow :chat :chat-messages="chatMessages" @send-message="sendMessage" />
</template>
