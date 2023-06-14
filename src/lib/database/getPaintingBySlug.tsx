'use server';

import { IGalleryImage } from '@/assets/typescript/ui';
import { getAllPaintings } from './getAllPaintings';
import { redirect } from 'next/navigation';
import sluggify from '../common/url.helpers';

export async function getPaintingBySlug(slug: string) {
  const allImages = await getAllPaintings();

  const selectedImage: IGalleryImage | null =
    allImages.find((img) => sluggify(img.title) === slug) ?? null;

  return selectedImage ?? redirect('/gallery');
}
