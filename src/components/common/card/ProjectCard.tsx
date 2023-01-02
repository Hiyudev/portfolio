import Card from '../Card';
import { HeadlineComponent } from '../Headline';
import { TextComponent } from '../Text';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <Card asChild>
      <li>
        <ul className="flex flex-row flex-wrap gap-4 text-sm">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <HeadlineComponent weight={5}>{title}</HeadlineComponent>
        <TextComponent weight={2}>{description}</TextComponent>
      </li>
    </Card>
  );
}
