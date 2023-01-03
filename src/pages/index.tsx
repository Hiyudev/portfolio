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
};

type HomePageProps = {
  position: {
    html: string;
    text: string;
  };
  description: {
    html: string;
    text: string;
  };
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

        <TableOfContent
          titles={[
            { id: 'projects', title: 'Projects', hasPassed: true },
            { id: 'posts', title: 'Posts', hasPassed: hasBlogHeadlinePassed },
          ]}
        />

        <Navbar />
      </div>

      <div className="z-10 col-start-2">
        <HeadlineComponent className="mb-8" id="projects" weight={3}>
          Projects
        </HeadlineComponent>
        <ul aria-label="Projects list" className="flex flex-col gap-4">
          {projects &&
            projects.map(
              (
                { title, description, tags, githubLink },
                index
              ) => {
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
        <HeadlineComponent
          className="mt-8 mb-8"
          id="posts"
          weight={3}
          ref={blogHeadline}
        >
          Posts
        </HeadlineComponent>
        <ul aria-label="Blog posts list" className="flex flex-col gap-4">
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
      content: { html: positionHtml, text: positionText },
    },
  }: {
    section: {
      content: {
        html: string;
        text: string;
      };
    };
  } = await client.request(getSection, {
    title: 'Position',
  });

  const {
    section: {
      content: { html: descriptionHtml, text: descriptionText },
    },
  }: {
    section: {
      content: {
        html: string;
        text: string;
      };
    };
  } = await client.request(getSection, {
    title: 'Description',
  });

  return {
    props: {
      position: {
        html: positionHtml,
        text: positionText.replaceAll('\\n', ''),
      },
      description: {
        html: descriptionHtml,
        text: descriptionText.replaceAll('\\n', ''),
      },
      projects,
    },
  };
};
