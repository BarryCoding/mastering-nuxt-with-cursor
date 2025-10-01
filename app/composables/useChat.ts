import type { Chat, ChatMessage } from '~/types'

import { MOCK_CHAT } from '~/mocks/data'

export default function useChat() {
  const chat = ref<Chat>(MOCK_CHAT)
  const chatMessages = computed<ChatMessage[]>(() => chat.value.messages)

  function createMessage(message: string, role: ChatMessage['role']) {
    const id = chatMessages.value.length.toString()

    return {
      id,
      role,
      content: message,
    }
  }

  async function sendMessage(message: string) {
    chatMessages.value.push(createMessage(message, 'user'))

    const data = await $fetch<ChatMessage>('/api/ai', {
      method: 'POST',
      body: {
        messages: chatMessages.value,
      },
    })

    chatMessages.value.push(data)
  }

  return {
    chat,
    chatMessages,
    sendMessage,
  }
}
