import { StaticImageData } from 'next/image';

export interface INavItem {
  name: string;
  path: string;
}

export interface IArtShow {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  website: string;
  imageSrc: StaticImageData;
}
