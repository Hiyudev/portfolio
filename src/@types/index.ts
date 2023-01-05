export type Post = {
  title: string;
  description: string;
  postLink: string;
  tags: string[];
}

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
};

export type SectionType = {
  title: string;
  content: {
    html: string;
    text: string;
  };
}