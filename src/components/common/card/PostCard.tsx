import Link from 'next/link';
import Card from '../Card';
import { HeadlineComponent } from '../Headline';
import { TextComponent } from '../Text';

type PostCardProps = {
  title: string;
  description: string;
  tags: string[];
  postLink: string;
};

export function PostCard({
  title,
  description,
  tags,
  postLink,
}: PostCardProps) {
  return (
    <Link
      className="rounded-md hover:ring-2 hover:ring-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300"
      aria-label={`Go to ${title}'s post`}
      href={postLink ?? '#'}
    >
      <Card asChild>
        <li>
          <ul
            aria-label={`Post tags: ${tags.flatMap((tag) => tag)}`}
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
