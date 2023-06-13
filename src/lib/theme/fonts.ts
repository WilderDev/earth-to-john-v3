import { Josefin_Sans, Lato } from 'next/font/google';

export const JosefinSansFont = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});

export const LatoFont = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'], // TSK
  preload: true,
  display: 'swap',
});
