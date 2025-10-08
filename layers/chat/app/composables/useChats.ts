interface CreateChatOptions {
  projectId?: string
  title?: string
}

const defaultChatOptions: CreateChatOptions = {}

export default function useChats() {
  const chats = useState<Chat[]>('chats', () => [])
  const { data: chatsData, execute } = useFetch<Chat[]>('/api/chats', {
    immediate: false,
    default: () => [],
  })

  async function fetchChats() {
    await execute()
    chats.value = chatsData.value
  }

  async function createChat(options = defaultChatOptions) {
    const newChat = await $fetch<Chat>('/api/chats', {
      method: 'POST',
      body: {
        title: options.title,
        projectId: options.projectId,
      },
    })
    chats.value.push(newChat)
    return newChat
  }

  async function createChatAndNavigate(options = defaultChatOptions) {
    const chat = await createChat(options)
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
    fetchChats,
    createChat,
    createChatAndNavigate,
    getChatsByProject,
  }
}
