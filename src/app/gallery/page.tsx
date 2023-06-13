import { IGalleryImage } from '@/assets/typescript/ui';
import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Title from '@/components/layout/Title';
import GalleryImage from './GalleryImage';

// * Page
export default async function GalleryPage() {
  // * Data
  const images = await getGalleryImages();

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

// * Fetcher
export async function getGalleryImages() {
  const images: IGalleryImage[] = [
    {
      name: 'Captivating',
      description: 'tsk',
      imageUrl:
        'https://res.cloudinary.com/dl54erra0/image/upload/v1670937838/cld-sample-5.jpg',
      isAvailable: true,
      dimensions: '36x48',
    },
    {
      name: 'Chrysalis',
      description: 'tsk',
      imageUrl:
        'https://res.cloudinary.com/dl54erra0/image/upload/v1670937837/cld-sample-4.jpg',
      isAvailable: true,
      dimensions: '36x48',
    },
    {
      name: 'Coneflower Ballet',
      description: 'tsk',
      imageUrl:
        'https://res.cloudinary.com/dl54erra0/image/upload/v1670937837/cld-sample-3.jpg',
      isAvailable: false,
      dimensions: '36x48',
    },
    {
      name: 'Connection in Blue',
      description: 'tsk',
      imageUrl:
        'https://res.cloudinary.com/dl54erra0/image/upload/v1670937827/samples/landscapes/landscape-panorama.jpg',
      isAvailable: true,
      dimensions: '36x48',
    },
    {
      name: 'Dancing Light',
      description: 'tsk',
      imageUrl:
        'https://res.cloudinary.com/dl54erra0/image/upload/v1670937824/samples/food/spices.jpg',
      isAvailable: false,
      dimensions: '36x48',
    },
  ];

  return images;
}

// * Metadata
export const metadata = {
  title: 'Gallery',
  description: 'TSK',
};
