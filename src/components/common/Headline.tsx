import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  Ref,
  RefAttributes,
} from 'react';

type HeadlineComponentProps = HTMLAttributes<HTMLHeadingElement> &
  RefAttributes<HTMLElement> & {
    asChild?: boolean;
    children?: ReactNode;
    weight: 1 | 2 | 3 | 4 | 5 | 6;
  };

// eslint-disable-next-line react/display-name
export const HeadlineComponent = forwardRef(
  (
    { asChild, className, children, weight, ...props }: HeadlineComponentProps,
    ref: Ref<HTMLElement>
  ) => {
    const headlineTag = `h${weight}`;
    const headlineClassnames = classNames(
      'font-black text-zinc-100',
      className,
      {
        'text-6xl': weight == 1,
        'text-3xl': weight == 2,
        'text-2xl': weight == 3,
        'text-xl': weight == 4,
        'text-lg': weight == 5,
      }
    );
    const Component = asChild ? Slot : headlineTag;

    return (
      <Component className={headlineClassnames} ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);
