import Image from 'next/image';

type AvatarProps = {
  src: string;
};

export default function Avatar({ src }: AvatarProps) {
  return (
    <div className="flex h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-white">
      <Image src={src} alt="Kevin's profile" width={48} height={48} />
    </div>
  );
}
