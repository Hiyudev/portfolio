export const getSocialMediaQuery = `
query getSocialMedia($name: String!){
  socials(where: {socialMediaName: $name}) {
    socialMediaUrl
    socialMediaName
  }
}
`;