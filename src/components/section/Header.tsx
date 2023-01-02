import { HeadlineComponent } from '../common/Headline';
import { TextComponent } from '../common/Text';
import { LogoIcon } from '../icons/LogoIcon';

type HeaderProps = {
  position: string;
  description: string;
};

export function Header({ position, description }: HeaderProps) {
  return (
    <header className="flex flex-col gap-4">
      <div className="h-12 w-12">
        <LogoIcon />
      </div>
      <HeadlineComponent weight={1}>Kevin Hirade</HeadlineComponent>
      <HeadlineComponent weight={2}>
        <div dangerouslySetInnerHTML={{ __html: position }}></div>
      </HeadlineComponent>
      <TextComponent asChild weight={2}>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </TextComponent>
    </header>
  );
}
