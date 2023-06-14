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

export interface IFeaturedTestimonial {
  message: string;
  author: {
    name: string;
    painting: string;
    imageUrl: StaticImageData;
    // logoUrl: string;
  };
}

export interface ITestimonial {
  message: string;
  author: {
    name: string;
    painting: string;
    imageUrl: StaticImageData;
  };
}

export interface IGalleryImage {
  title: string;
  medium: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  original: {
    price: string;
    sellDate: string | null;
    owner: string | null;
  };
  print: {
    isAvailable: boolean;
  };
  awards: string | null;
  tags: string[];
  createdAt?: string;
}
