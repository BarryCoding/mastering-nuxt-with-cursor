import { getMessagesByChatId } from '~~/layers/chat/server/repository/chat-repository'

export default defineEventHandler(async event => {
  const { id } = getRouterParams(event)
  const messages = await getMessagesByChatId(id)

  return messages
})
