import { createChat } from '../../repository/chat-repository'

export default defineEventHandler(async _event => {
  const { title, projectId } = await readBody(_event)
  return createChat({
    title,
    projectId,
  })
})
