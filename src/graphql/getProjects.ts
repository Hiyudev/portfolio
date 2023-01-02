export const getProjectsQuery = `query getProjects {
  projects {
    title
    tags
    githubLink
    projectLink
    description
  }
}
`;