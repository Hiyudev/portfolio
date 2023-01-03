import Link from 'next/link';
import { useEffect, useState } from 'react';
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
  const [tableTitles, setTableTitles] = useState<Title[]>();

  useEffect(() => {
    const reversedTitles = [...titles].reverse();

    for (let title of reversedTitles) {
      if (title.hasPassed) {
        const currentTitle = titles.find((t) => t.id === title.id);
        currentTitle.active = true;
        break;
      }
    }

    setTableTitles([...titles]);
  }, [titles]);

  return (
    <ul aria-label="Table of contents" className="flex flex-col gap-4">
      {tableTitles &&
        tableTitles.map(({ id, title, active }) => {
          return (
            <li key={id}>
              <TextComponent weight={active ? 1 : 2} asChild>
                <Link aria-label={`Go to ${title} section`} href={`#${id}`}>
                  {title}
                </Link>
              </TextComponent>
            </li>
          );
        })}
    </ul>
  );
}
