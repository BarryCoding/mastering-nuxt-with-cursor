export default function useChat(chatId: string) {
  const { chats } = useChats()
  const chat = computed(() => chats.value.find(c => c.id === chatId))
  const chatMessages = computed<ChatMessage[]>(() => chat.value?.messages ?? [])

  function createMessage(message: string, role: ChatMessage['role']) {
    const id = chatMessages.value.length.toString()

    return {
      id,
      role,
      content: message,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }

  async function sendMessage(message: string) {
    if (!chat.value) return
    chatMessages.value.push(createMessage(message, 'user'))

    const data = await $fetch<ChatMessage>('/api/ai', {
      method: 'POST',
      body: {
        messages: chatMessages.value,
      },
    })

    chat.value.updatedAt = new Date()
    chatMessages.value.push(data)
  }

  return {
    chat,
    chatMessages,
    sendMessage,
  }
}
