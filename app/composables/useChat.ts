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

  function sendMessage(message: string) {
    chatMessages.value.push(createMessage(message, 'user'))

    setTimeout(() => {
      chatMessages.value.push(
        createMessage(`You said: ${message}`, 'assistant'),
      )
    }, 200)
  }

  return {
    chat,
    chatMessages,
    sendMessage,
  }
}
