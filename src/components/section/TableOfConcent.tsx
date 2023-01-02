import Link from 'next/link';
import { useEffect } from 'react';
import { TextComponent } from '../common/Text';

interface Title {
  id: string;
  title: string;
  hasPassed: boolean;
  active?: boolean;
}

type TableOfContentProps = {
  titles: Title[];
};

export function TableOfContent({ titles }: TableOfContentProps) {
  useEffect(() => {
    const reverseTitles = [...titles].reverse();

    for (let title of reverseTitles) {
      if (title.hasPassed) {
        const currentTitle = titles.find((t) => t.id === title.id);
        currentTitle.active = true;
        break;
      }
    }
  }, [titles]);

  return (
    <ul className="flex flex-col gap-4">
      {titles &&
        titles.map(({ id, title, active }) => {
          return (
            <li key={id}>
              <TextComponent weight={active ? 1 : 2} asChild>
                <Link href={`#${id}`}>{title}</Link>
              </TextComponent>
            </li>
          );
        })}
    </ul>
  );
}
