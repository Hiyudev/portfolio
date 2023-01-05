export const getSocialMediaQuery = `
query getSocials($name: String) {
  socials(where: {name: $name}) {
    name
    url
  }
}
`;