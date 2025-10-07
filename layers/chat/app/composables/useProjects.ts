export default function useProjects() {
  const projects = useState<Project[]>('projects', () => [MOCK_PROJECT])

  function createProject() {
    const id = (projects.value.length + 1).toString()
    const project = {
      id,
      name: 'New Project',
      createdAt: new Date(),
      updatedAt: new Date(),
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
