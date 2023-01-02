import Link from 'next/link';
import { ArrowSquareOut, GithubLogo, TwitterLogo } from 'phosphor-react';
import Avatar from '../common/Avatar';

export function Navbar() {
  return (
    <nav className="flex w-full flex-row items-center justify-between gap-4">
      <Avatar src="https://avatars.githubusercontent.com/u/37001732?v=4" />

      <ul className="flex flex-row space-x-6">
        <Link href={''}>
          <li className="flex flex-row items-center gap-2 text-white">
            <TwitterLogo weight="fill" aria-hidden />
            <span>Twitter</span>
            <ArrowSquareOut />
          </li>
        </Link>
        <Link href={''}>
          <li className="flex flex-row items-center gap-2 text-white">
            <GithubLogo weight="fill" aria-hidden />
            <span>Github</span>
            <ArrowSquareOut />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
