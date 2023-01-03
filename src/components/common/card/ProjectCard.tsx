import Link from 'next/link';
import Card from '../Card';
import { HeadlineComponent } from '../Headline';
import { TextComponent } from '../Text';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  githubLink,
}: ProjectCardProps) {
  return (
    <Link aria-label={`Go to ${title}'s github`} href={githubLink ?? '#'}>
      <Card asChild>
        <li>
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
        </li>
      </Card>
    </Link>
  );
}
