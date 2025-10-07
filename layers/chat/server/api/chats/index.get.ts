import { getAllChats } from '../../repository/chat-repository'

export default defineEventHandler(async _event => {
  return getAllChats()
})
