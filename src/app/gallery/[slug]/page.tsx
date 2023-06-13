import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Title from '@/components/layout/Title';
import { getGalleryImages } from '../page';
import sluggify from '@/lib/common/url.helpers';
import { IGalleryImage } from '@/assets/typescript/ui';

// * Params
interface IParams {
  params: {
    slug: string;
  };
}

// * Page
export default async function PaintingDetailsPage({
  params: { slug },
}: IParams) {
  // * Data
  const painting = (await getPaintingBySlug(slug)) as IGalleryImage;

  // * Render
  return (
    <Main>
      <Container>
        <Title>{painting.name}</Title>
      </Container>
    </Main>
  );
}

// * Fetcher
export async function getPaintingBySlug(slug: string) {
  const allImages = await getGalleryImages();

  const selectedImage: IGalleryImage | null =
    allImages.find((img) => sluggify(img.name) === slug) ?? null;

  return selectedImage;
}
