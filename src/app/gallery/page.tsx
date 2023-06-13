import { IGalleryImage } from '@/assets/typescript/ui';
import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Title from '@/components/layout/Title';
import GalleryImage from './GalleryImage';

// * Data
const images: IGalleryImage[] = [
  {
    name: 'Captivating',
    imageUrl: '/Captivating.jpg',
    width: 4942,
    height: 7447,
    isAvailable: true,
  },
  {
    name: 'Chrysalis',
    imageUrl: '/Chrysalis.jpg',
    width: 7047,
    height: 5223,
    isAvailable: true,
  },
  {
    name: 'Coneflower Ballet',
    imageUrl: '/Coneflower_Ballet.jpg',
    width: 5469,
    height: 6729,
    isAvailable: false,
  },
  {
    name: 'Connection in Blue',
    imageUrl: '/Connection_in_Blue.jpg',
    width: 4667,
    height: 7886,
    isAvailable: true,
  },
  {
    name: 'Dancing Light',
    imageUrl: '/Dancing_Light.jpg',
    width: 4342,
    height: 4420,
    isAvailable: false,
  },
];

// CLOUDFLARE_BUCKET_URL;

// * Page
export default function GalleryPage() {
  // * State
  // Split the array into three
  const midIndex = Math.ceil(images.length / 3);
  const firstHalfImages = images
    .slice(0, midIndex)
    .sort((a, b) =>
      a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1,
    );
  const secondHalfImages = images
    .slice(midIndex, midIndex * 2)
    .sort((a, b) =>
      a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1,
    );
  const thirdHalfImages = images
    .slice(midIndex * 2)
    .sort((a, b) =>
      a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1,
    );

  // * Render
  return (
    <Main>
      <Container>
        <Title className="my-8 md:mb-16">Carman Art Gallery</Title>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-x-6">
          {/* First half of images */}
          <div className="col-span-1 space-y-6">
            {firstHalfImages?.map((img) => (
              <GalleryImage {...img} key={img.name} />
            ))}
          </div>

          {/* Second half of images */}
          <div className="col-span-1 space-y-6">
            {secondHalfImages?.map((img) => (
              <GalleryImage {...img} key={img.name} />
            ))}
          </div>

          {/* Third half of images */}
          <div className="col-span-1 space-y-6">
            {thirdHalfImages?.map((img) => (
              <GalleryImage {...img} key={img.name} />
            ))}
          </div>
        </div>
      </Container>
    </Main>
  );
}

// * Metadata
export const metadata = {
  title: 'Gallery',
  description: 'TSK',
};
