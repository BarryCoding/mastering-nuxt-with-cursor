import { getProjectById } from '../../repository/project-repository'

export default defineEventHandler(async event => {
  const { id } = getRouterParams(event)

  return getProjectById(id)
})
