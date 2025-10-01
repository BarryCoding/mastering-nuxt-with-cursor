export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { messages } = body

  const id = messages.length.toString()
  const lastMessage = messages[messages.length - 1]

  // Test runtimeConfig in server mode
  // const runtimeConfig = useRuntimeConfig()
  // console.warn(`🤖 ~ server/api/ai.ts runtimeConfig:`, runtimeConfig)

  return {
    id,
    role: 'assistant',
    content: `(server) You said: ${lastMessage.content}`,
  }
})
