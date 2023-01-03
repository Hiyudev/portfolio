const SEO = {
  defaultTitle: "Kevin Hirade's portfolio",
  description:
    'Enthusiast developer passionate about the technology world. I create and design fast and accessible programs to make your idea a real-world product.',
  additionalMetaTags: [
    {
      property: 'keywords',
      content:
        'kevin hirade, kevin hirade portfolio, kevin, kevin portfolio, hiyudev, hiyudev portfolio',
    },
    {
      name: 'theme_color',
      content: '#7dd3fc',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/assets/favicon.ico',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hiyudev.me/',
    title: "Kevin Hirade's portfolio",
    site_name: "Kevin Hirade's portfolio",
    description:
      'Enthusiast developer passionate about the technology world. I create and design fast and accessible programs to make your idea a real-world product.',
    images: [
      {
        url: 'https://hiyudev.me/static/Banner.png',
        width: 1360,
        height: 768,
        alt: 'Og Image Alt',
      },
    ],
    imageWidth: 1360,
    imageHeight: 768,
  },
  twitter: {
    handle: '@Hiyudev',
    cardType: 'summary_large_image',
  },
};

export default SEO;
