export const getInformationQuery = `
query getInfos {
  projects {
    title
    tags
    githubLink
    description
  }
  posts {
    title
    tags
    postLink
    description
  }
  sections {
    content {
      html
      text
    }
    title
  }
}
`;