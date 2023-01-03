import Image from 'next/image';
import { HTMLAttributes } from 'react';

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
};

export default function Avatar({ src, ...props }: AvatarProps) {
  return (
    <div
      className="flex h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-white"
      {...props}
    >
      <Image src={src} alt="Kevin's profile" width={48} height={48} />
    </div>
  );
}
