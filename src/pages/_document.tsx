import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      style={{
        colorScheme: 'dark',
      }}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
