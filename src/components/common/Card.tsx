import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  asChild: boolean;
  children: React.ReactNode;
};

export default function Card({ asChild, children, ...props }: CardProps) {
  const Component = asChild ? Slot : 'div';

  return (
    <Component
      className="flex flex-col gap-4 rounded-md bg-zinc-800 p-8"
      {...props}
    >
      {children}
    </Component>
  );
}
