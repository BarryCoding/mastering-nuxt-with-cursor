import { createMessageForChat } from '../../../../repository/chat-repository'

export default defineEventHandler(async event => {
  const { id } = getRouterParams(event)
  const body = await readBody(event)

  return createMessageForChat({
    chatId: id,
    content: body.content,
    role: body.role,
  })
})
