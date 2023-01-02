export const getProjectsQuery = `query getProjects {
  projects {
    title
    techStack
    githubLink
    projectLink
    description
  }
}
`;