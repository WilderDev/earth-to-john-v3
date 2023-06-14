import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Title from '@/components/layout/Title';
import GalleryImage from './GalleryImage';
import { getAllPaintings } from '@/lib/database/getAllPaintings';

// * Page
export default async function GalleryPage() {
  // * Data
  const paintings = await getAllPaintings();

  // * Render
  return (
    <Main>
      <Container>
        <Title className="my-8 md:mb-16 text-center md:text-left">
          Carman Art Gallery
        </Title>

        {/* Paintings Grid */}
        <div className="painting-grid space-y-6">
          {paintings?.map(({ title, imageUrl }) => (
            <div className="break-inside-avoid" key={title}>
              <GalleryImage title={title} imageUrl={imageUrl} />
            </div>
          ))}
        </div>
      </Container>
    </Main>
  );
}

// * Metadata
export const metadata = {
  title: 'Gallery',
  description:
    "View John Carman's oil paintings. Available for purchase. Contact John today.",
};
