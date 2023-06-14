import { Metadata } from 'next';
import { baseUrl } from '../common/site.helpers';

const title = 'Earth to John | Premium Large Oil Paintings by John Carman';
const description =
  'Premium Large Oil Paintings by John Carman - Featured in top art galleries across the United States.';
const images = [
  {
    url: '/static/images/Captivating.jpg',
    alt: 'Captivating',
    width: 4942,
    height: 7447,
  },
];

export const defaultMetadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: `Home | ${title}`,
  },
  description,
  applicationName: title,
  creator: 'John Carman',
  colorScheme: 'only light',
  themeColor: '#fafaf9',
  metadataBase: new URL(baseUrl),
  assets: '/static',
  manifest: '/manifest.json',
  keywords: [
    'John Carman',
    'John Carman Art',
    'John Carman Paintings',
    'John Carman Oil Paintings',
    'John Carman Artist',
    'John Carman Artwork',
    'John Carman Art Gallery',
    'Oil Paintings',
    'Oil Paintings for Sale',
    'Oil Paintings for Sale Online',
    'Large Oil Paintings',
    'Large Oil Paintings for Sale',
    'Premium Oil Paintings',
    'Premium Oil Paintings for Sale',
  ],
  bookmarks: [
    baseUrl + '/',
    baseUrl + '/about',
    baseUrl + '/contact',
    baseUrl + '/gallery',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Earth to John',
    title,
    description,
    url: baseUrl,
    images,
    locale: 'en_US',
    countryName: 'United States',
    emails: ['carman.john@icloud.com'],
    ttl: 60 * 60 * 24 * 7, // 1 week
  },
  icons: {
    icon: [
      { url: '/static/favicon/maskable_icon.png' },
      new URL('/static/favicon/maskable_icon.png', baseUrl).toString(),
    ],
    apple: [
      {
        url: '/static/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  robots: {
    follow: true,
    index: true,
    nocache: false,
    noimageindex: false,
    nosnippet: false,
    notranslate: false,
    noarchive: false,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};
