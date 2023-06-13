import { Metadata } from 'next';
import { baseUrl } from '../common/site.helpers';

const title = 'Earth to John | Premium Large Oil Paintings by John Carman';
const description =
  'Premium Large Oil Paintings by John Carman - Featured in top art galleries across the United States.';
const images = [
  {
    url: 'tsk',
    alt: 'tsk',
    width: 0,
    height: 0,
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
  assets: baseUrl + '/static',
  themeColor: '#fafaf9',
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
  // bookmarks
  // manifest
  // metadataBase: new URL(baseUrl)
  // openGraph
  // twitter
  // icons
  // robots
};

// TSK: https://github.com/WilderDev/learnly-primary-app/blob/main/src/lib/meta/defaultMetadata.ts
