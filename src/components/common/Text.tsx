import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import { HTMLAttributes } from 'react';

type TextComponentProps = HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
  children?: React.ReactNode;
  weight: 1 | 2;
};

export function TextComponent({
  asChild,
  children,
  weight,
  ...props
}: TextComponentProps) {
  const textClassnames = classNames({
    'text-zinc-100': weight == 1,
    'text-zinc-400': weight == 2,
  });
  const Component = asChild ? Slot : 'p';

  return (
    <Component className={textClassnames} {...props}>
      {children}
    </Component>
  );
}
