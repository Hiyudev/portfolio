import { HeadlineComponent } from '../common/Headline';
import { TextComponent } from '../common/Text';
import { LogoIcon } from '../icons/LogoIcon';

export function Header() {
  return (
    <header className="flex flex-col gap-4">
      <div className="h-12 w-12">
        <LogoIcon />
      </div>
      <HeadlineComponent weight={1}>Kevin Hirade</HeadlineComponent>
      <HeadlineComponent weight={2}>Desenvolvedor no NÓS</HeadlineComponent>
      <TextComponent weight={2}>
        Desenvolvedor entusiasta apaixonado pelo mundo tecnológico. Crio e
        desenho programas rápidos e acessíveis para tornar sua ideia um produto
        do mundo real.
      </TextComponent>
    </header>
  );
}
