import type { Chat } from '../types'
import { MOCK_CHAT } from '~/mocks/data'

interface CreateChatOptions {
  projectId?: string
}

const defaultChatOptions: CreateChatOptions = {}

export default function useChats() {
  const chats = useState<Chat[]>('chats', () => [MOCK_CHAT])

  function createChat(options = defaultChatOptions) {
    const id = (chats.value.length + 1).toString()
    const chat = {
      id,
      title: `Chat ${id}`,
      messages: [],
      projectId: options.projectId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    chats.value.push(chat)

    return chat
  }

  async function createChatAndNavigate(options = defaultChatOptions) {
    const chat = createChat(options)
    if (chat.projectId) {
      await navigateTo(`/projects/${chat.projectId}/chats/${chat.id}`)
    } else {
      await navigateTo(`/chats/${chat.id}`)
    }
  }

  function getChatsByProject(projectId: string) {
    return chats.value.filter(chat => chat.projectId === projectId)
  }

  return {
    chats,
    createChat,
    createChatAndNavigate,
    getChatsByProject,
  }
}
