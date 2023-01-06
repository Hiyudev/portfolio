import type { GetServerSideProps, NextPage } from 'next';
import { useRef } from 'react';
import { Post, Project, SectionType } from '../@types';
import { PostCard } from '../components/common/card/PostCard';
import { ProjectCard } from '../components/common/card/ProjectCard';
import { HeadlineComponent } from '../components/common/Headline';
import { Header } from '../components/section/Header';
import { Navbar } from '../components/section/Navbar';
import { TableOfContent } from '../components/section/TableOfContent';
import { getInformationQuery } from '../graphql/getInfos';
import { useHasPassed } from '../hooks/useHasPassed';
import { client } from '../lib/GraphQLClient';

type HomePageProps = {
  projects: Project[];
  posts: Post[];
  sections: SectionType[];
};

const HomePage: NextPage = ({ projects, posts, sections }: HomePageProps) => {
  const blogHeadline = useRef(null);
  const hasBlogHeadlinePassed = useHasPassed(blogHeadline);

  const PositionText = sections.filter(
    (section) => section.title == 'Position'
  )[0].content;

  const DescriptionText = sections.filter(
    (section) => section.title == 'Description'
  )[0].content;

  const titles = [
    { id: 'projects', title: 'Projects', hasPassed: true },
  ];

  if (posts.length > 0) {
    titles.push(
      { id: 'posts', title: 'Posts', hasPassed: hasBlogHeadlinePassed },
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col gap-16 overflow-hidden bg-zinc-900 p-4 text-white md:grid md:grid-cols-2 md:gap-8 md:p-8">
      <div aria-hidden className="absolute left-0 top-0 h-96 w-96 animate-spin-slow bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 to-sky-200 opacity-25 blur-3xl md:fixed" />
      <div aria-hidden className="absolute right-32 md:top-36 top-[500px] h-96 w-96 animate-spin-slow bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-sky-900 opacity-25 blur-3xl md:fixed" />

      <div className="z-10 flex w-full flex-col justify-around gap-4 md:fixed md:h-[90vh] md:w-5/12">
        <Header
          position={{ ...PositionText }}
          description={{ ...DescriptionText }}
        />

        <TableOfContent
          titles={titles}
        />

        <Navbar />
      </div>

      <div className="z-10 col-start-2">
        {projects.length > 0 && (
          <>
            <HeadlineComponent className="mb-8" id="projects" weight={3}>
              Projects
            </HeadlineComponent>
            <ul aria-label="Projects list" className="flex flex-col gap-4">
              {projects.map(
                ({ title, description, tags, githubLink }, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      tags={tags}
                      title={title}
                      description={description}
                      githubLink={githubLink}
                    />
                  );
                }
              )}
            </ul>
          </>
        )}
        {posts.length > 0 && (
          <>
            <HeadlineComponent
              className="mt-8 mb-8"
              id="posts"
              weight={3}
              ref={blogHeadline}
            >
              Posts
            </HeadlineComponent>
            <ul aria-label="Blog posts list" className="flex flex-col gap-4">
              {posts.map((post, index) => {
                return <PostCard key={index} {...post} />;
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    projects,
    posts,
    sections,
  }: { projects: Project[]; posts: Post[]; sections: SectionType[] } =
    await client.request(getInformationQuery);

  return {
    props: {
      projects,
      posts,
      sections,
    },
  };
};
