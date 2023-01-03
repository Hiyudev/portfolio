import Link from 'next/link';
import { ArrowSquareOut, Browser, GithubLogo } from 'phosphor-react';
import Card from '../Card';
import { HeadlineComponent } from '../Headline';
import { TextComponent } from '../Text';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  projectLink?: string;
  githubLink?: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  projectLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <Card asChild>
      <li aria-label={`${title} project card`}>
        <ul
          aria-label={`Technologies used: ${tags.flatMap((tag) => tag)}`}
          className="flex flex-row flex-wrap gap-4 text-sm"
        >
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>

        <HeadlineComponent weight={5}>{title}</HeadlineComponent>
        <TextComponent weight={2}>{description}</TextComponent>

        {(projectLink || githubLink) && (
          <ul
            aria-label="Project links"
            className="flex w-full flex-row-reverse gap-4"
          >
            {projectLink && (
              <li aria-label={`${title} project link`}>
                <Link
                  className="flex flex-row items-center gap-2"
                  href={projectLink}
                >
                  <Browser weight="fill" />
                  <span>Project</span>
                  <ArrowSquareOut />
                </Link>
              </li>
            )}
            {githubLink && (
              <li aria-label={`${title} github link`}>
                <Link
                  className="flex flex-row items-center gap-2"
                  href={githubLink}
                >
                  <GithubLogo weight="fill" />
                  <span>Github</span>
                  <ArrowSquareOut />
                </Link>
              </li>
            )}
          </ul>
        )}
      </li>
    </Card>
  );
}
