import { createChat } from '../../repository/chat-repository'

export default defineEventHandler(async _event => {
  return createChat({
    title: 'New Chat',
  })
})
