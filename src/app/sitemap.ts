import sluggify from '@/lib/common/url.helpers';
import { getAllPaintings } from '@/lib/database/getAllPaintings';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPaintings = await getAllPaintings();
  const paintingRoutes = allPaintings.map((painting) => ({
    url: `/gallery/${sluggify(painting.title)}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: '/',
      lastModified: new Date(),
    },
    {
      url: '/gallery',
      lastModified: new Date(),
    },
    {
      url: '/about',
      lastModified: new Date(),
    },
    {
      url: '/contact',
      lastModified: new Date(),
    },
    ...paintingRoutes,
  ];
}
