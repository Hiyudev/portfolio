import type { GetServerSideProps, NextPage } from 'next';
import { useRef } from 'react';
import { ProjectCard } from '../components/common/card/ProjectCard';
import { HeadlineComponent } from '../components/common/Headline';
import { Header } from '../components/section/Header';
import { Navbar } from '../components/section/Navbar';
import { TableOfContent } from '../components/section/TableOfContent';
import { getProjectsQuery } from '../graphql/getProjects';
import { getSection } from '../graphql/getSection';
import { useHasPassed } from '../hooks/useHasPassed';
import { client } from '../lib/GraphQLClient';

type Project = {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  projectLink?: string;
};

type HomePageProps = {
  position: string;
  description: string;
  projects: Project[];
};

const HomePage: NextPage = ({
  position,
  description,
  projects,
}: HomePageProps) => {
  const blogHeadline = useRef(null);
  const hasBlogHeadlinePassed = useHasPassed(blogHeadline);

  return (
    <div className="relative flex min-h-screen flex-col gap-16 overflow-hidden bg-zinc-900 p-4 text-white md:grid md:grid-cols-2 md:gap-8 md:p-8">
      <div className="absolute left-0 top-0 h-96 w-96 animate-spin-slow bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 to-sky-200 opacity-25 blur-3xl md:fixed" />
      <div className="absolute right-32 top-36 h-96 w-96 animate-spin-slow bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-sky-900 opacity-25 blur-3xl md:fixed" />

      <div className="z-10 flex w-full flex-col justify-around gap-4 md:fixed md:h-[90vh] md:w-5/12">
        <Header position={position} description={description} />

        <nav>
          <TableOfContent
            titles={[
              { id: 'projects', title: 'Projects', hasPassed: true },
              { id: 'posts', title: 'Posts', hasPassed: hasBlogHeadlinePassed },
            ]}
          />
        </nav>

        <Navbar />
      </div>

      <div className="z-10 col-start-2">
        <HeadlineComponent className="mb-4" id="projects" weight={3}>
          Projects
        </HeadlineComponent>
        <ul className="flex flex-col gap-4">
          {projects &&
            projects.map(({ title, description, tags: techStack }, index) => {
              return (
                <ProjectCard
                  key={index}
                  tags={techStack}
                  title={title}
                  description={description}
                />
              );
            })}
        </ul>
        <HeadlineComponent
          className="mt-8 mb-4"
          id="posts"
          weight={3}
          ref={blogHeadline}
        >
          Posts
        </HeadlineComponent>
        <ul className="flex flex-col gap-4">
          {Array(5)
            .fill(0)
            .map((_, index) => {
              return (
                <ProjectCard
                  key={index}
                  tags={['React', 'Next.js', 'TypeScript']}
                  title="Project"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl."
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { projects }: { projects: Project[] } = await client.request(
    getProjectsQuery
  );

  const {
    section: {
      content: { html: position },
    },
  } = await client.request(getSection, {
    title: 'Position',
  });

  const {
    section: {
      content: { html: description },
    },
  } = await client.request(getSection, {
    title: 'Description',
  });

  return {
    props: {
      position,
      description,
      projects,
    },
  };
};
