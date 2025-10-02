// import { createOpenAIModel, generateChatResponse } from '../services/ai-service'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { messages } = body
  const id = messages.length.toString()

  // const openaiApiKey = useRuntimeConfig().openaiApiKey
  // const openaiModel = createOpenAIModel(openaiApiKey)
  // const content = await generateChatResponse(openaiModel, messages)

  // return {
  //   id,
  //   role: 'assistant',
  //   content,
  // }

  const lastMessage = messages[messages.length - 1]

  return {
    id,
    role: 'assistant',
    content: `(server) You said: ${lastMessage.content}`,
  }
})
