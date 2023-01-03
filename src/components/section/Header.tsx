import { HeadlineComponent } from '../common/Headline';
import { TextComponent } from '../common/Text';
import { LogoIcon } from '../icons/LogoIcon';

type DetailedText = {
  html: string;
  text: string;
};

type HeaderProps = {
  position: DetailedText;
  description: DetailedText;
};

export function Header({ position, description }: HeaderProps) {
  return (
    <header className="flex flex-col gap-4">
      <div aria-hidden className="h-12 w-12">
        <LogoIcon />
      </div>
      <HeadlineComponent weight={1}>Kevin Hirade</HeadlineComponent>
      <HeadlineComponent weight={2}>
        <div
          aria-label={position.text}
          dangerouslySetInnerHTML={{ __html: position.html }}
        ></div>
      </HeadlineComponent>
      <TextComponent asChild weight={2}>
        <div
          aria-label={description.text}
          dangerouslySetInnerHTML={{ __html: description.html }}
        ></div>
      </TextComponent>
    </header>
  );
}
