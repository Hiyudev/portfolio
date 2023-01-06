import Link from 'next/link';
import { GithubLogo, House, TwitterLogo } from 'phosphor-react';
import { LogoIcon } from '../components/icons/LogoIcon';

const links = [
  {
    aria: "Visit Kevin Hirade's portfolio",
    label: "Website",
    logo: <House weight='fill' />,
    href: "/"
  },
  {
    aria: "Visit Kevin Hirade's twitter",
    label: "Twitter",
    logo: <TwitterLogo weight='fill' />,
    href: "/api/social/twitter"
  },
  {
    aria: "Visit Kevin Hirade's github",
    label: "Github",
    logo: <GithubLogo weight='fill' />,
    href: "/api/social/github"
  }
]

const LinksPage = () => {
  return (
    <div className="relative items-center justify-center flex min-h-screen w-screen flex-col gap-16 overflow-hidden bg-zinc-900 text-white">
      <div aria-hidden className="absolute left-0 top-0 h-96 w-96 animate-spin-slow bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 to-sky-200 opacity-25 blur-3xl md:fixed" />
      <div aria-hidden className="absolute right-32 top-72 h-96 w-96 animate-spin-slow bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-sky-900 opacity-25 blur-3xl md:fixed" />

      <div className='z-10 w-48 h-48'>
        <LogoIcon />
      </div>

      <ul className='z-10 flex flex-col gap-4'>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link className='hover:text-sky-300 hover:ring-2 hover:ring-sky-300 focus:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300 flex min-w-[240px] items-center justify-center gap-2 rounded-full ring-zinc-100 ring-1 p-2 outline-none transition-colors' href={link.href}>
                {link.logo}

                <span>
                  {link.label}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LinksPage;
