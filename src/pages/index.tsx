import type { NextPage } from 'next';
import { useRef } from 'react';
import { ProjectCard } from '../components/common/card/ProjectCard';
import { HeadlineComponent } from '../components/common/Headline';
import { Header } from '../components/section/Header';
import { Navbar } from '../components/section/Navbar';
import { TableOfContent } from '../components/section/TableOfConcent';
import { useHasPassed } from '../hooks/useHasPassed';

const HomePage: NextPage = () => {
  const blogHeadline = useRef(null);
  const hasBlogHeadlinePassed = useHasPassed(blogHeadline);

  return (
    <div className="flex min-h-screen flex-col gap-16 bg-zinc-900 p-8 text-white md:grid md:grid-cols-2 md:gap-8">
      <div className="flex w-full flex-col justify-center gap-4 md:fixed md:h-[90vh] md:w-5/12">
        <Header />

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

      <div className="col-start-2">
        <HeadlineComponent className="mb-4" id="projects" weight={3}>
          Projects
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
