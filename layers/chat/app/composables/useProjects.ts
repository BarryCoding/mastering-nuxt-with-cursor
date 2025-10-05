import type { Project } from '~~/layers/chat/app/types'
import { MOCK_PROJECT } from '~~/layers/chat/app/mocks/data'

export default function useProjects() {
  const projects = useState<Project[]>('projects', () => [MOCK_PROJECT])

  function createProject() {
    const id = (projects.value.length + 1).toString()
    const project = {
      id,
      name: 'New Project',
    }

    projects.value.push(project)

    return project
  }

  function createProjectAndNavigate() {
    const project = createProject()
    navigateTo(`/projects/${project.id}`)
  }

  return { projects, createProject, createProjectAndNavigate }
}
