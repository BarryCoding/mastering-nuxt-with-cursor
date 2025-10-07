import {
  createMessageForChat,
  getMessagesByChatId,
} from '../../../../repository/chat-repository'
import {
  createOpenAIModel,
  generateChatResponse,
} from '../../../../services/ai-service'

export default defineEventHandler(async event => {
  const { id: chatId } = getRouterParams(event)

  if (!chatId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Chat ID is required',
    })
  }

  const history = getMessagesByChatId(chatId)

  const openai = createOpenAIModel(useRuntimeConfig().openaiApiKey)
  const content = await generateChatResponse(openai, history)

  return createMessageForChat({
    chatId,
    content,
    role: 'assistant',
  })
})
