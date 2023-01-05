import Link from 'next/link';
import { ArrowSquareOut, GithubLogo, TwitterLogo } from 'phosphor-react';
import Avatar from '../common/Avatar';

export function Navbar() {
  return (
    <nav className="flex w-full flex-row items-center justify-between gap-4">
      <Avatar
        aria-hidden
        src="https://avatars.githubusercontent.com/u/37001732?v=4"
      />

      <ul
        aria-label="Social media links"
        className="flex flex-row space-x-2 md:space-x-6"
      >
        <Link aria-label={`Go to Kevin's twitter`} href={'/api/social/twitter'}>
          <li className="flex flex-row items-center gap-2 underline decoration-sky-300 underline-offset-4 transition-colors hover:text-sky-300 active:text-sky-300">
            <TwitterLogo weight="fill" aria-hidden />
            <span>Twitter</span>
            <ArrowSquareOut />
          </li>
        </Link>
        <Link aria-label={`Go to Kevin's github`} href={'/api/social/github'}>
          <li className="flex flex-row items-center gap-2 underline decoration-sky-300 underline-offset-4 transition-colors hover:text-sky-300 active:text-sky-300">
            <GithubLogo weight="fill" aria-hidden />
            <span>Github</span>
            <ArrowSquareOut />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
