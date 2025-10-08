export default function useProjects() {
  const projects = useState<Project[]>('projects', () => [])

  const { data, execute, status } = useFetch<Project[]>('/api/projects', {
    default: () => [],
    immediate: false,
  })

  async function fetchProjects() {
    if (status.value !== 'idle') return
    await execute()
    projects.value = data.value
  }

  async function createProject() {
    const project = await $fetch<Project>('/api/projects', {
      method: 'POST',
      body: {
        name: 'New Project',
      },
    })
    projects.value.push(project)

    return project
  }

  async function createProjectAndNavigate() {
    const project = await createProject()
    await navigateTo(`/projects/${project.id}`)
  }

  return { projects, createProject, fetchProjects, createProjectAndNavigate }
}
