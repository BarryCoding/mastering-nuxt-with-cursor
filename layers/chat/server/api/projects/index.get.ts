import { getAllProjects } from '../../repository/project-repository'

export default defineEventHandler(async _event => {
  return getAllProjects()
})
