import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '../../next-seo.config';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
