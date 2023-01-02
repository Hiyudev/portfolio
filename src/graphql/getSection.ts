export const getSection = `
query getSection($title: String) {
  section(where: {title: $title}) {
    content {
      html
    }
  }
}

`