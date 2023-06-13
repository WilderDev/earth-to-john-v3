import { getPaintingBySlug } from '@/app/gallery/[slug]/page';
import { IGalleryImage } from '@/assets/typescript/ui';
import Modal from '@/components/layout/Modal';
import Button from '@/components/ui/Button';
import CloudImage from '@/components/ui/CloudImage';
import cn from '@/lib/common/style.helpers';
import sluggify from '@/lib/common/url.helpers';

// * Params
interface IParams {
  params: {
    slug: string;
  };
}

// * Page (Modal)
export default async function GalleryItemInterceptionModal({
  params: { slug },
}: IParams) {
  const painting = (await getPaintingBySlug(slug)) as IGalleryImage;

  // * Render
  return (
    <Modal>
      {/* Body */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-y-0 w-full">
        {/* Image */}
        <CloudImage
          className="w-full md:w-1/2 h-auto"
          src={painting.imageUrl}
          alt={painting.name}
        />

        {/* Details */}
        <div className="flex flex-col w-full md:w-1/2 md:min-h-full justify-between relative">
          {/* Top */}
          <div>
            {/* Name */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              {painting.name}
            </h1>

            {/* Description */}
            <p className="text-stone-600 italic mt-2">{painting.description}</p>

            {/* Dimensions */}
            <p className="text-stone-600 mt-2">{painting.dimensions} inches</p>
          </div>

          {/* Inquire (CTA) */}
          <Button
            className="block self-end place-self-end justify-self-end mt-auto"
            href={`/contact?painting=${sluggify(painting.name)}`}
            shadow="lg"
          >
            Inquire
          </Button>

          {/* Availability */}
          <div
            className={cn(
              'absolute top-0 right-0 m-2 text-xs md:text-sm font-bold text-white px-3.5 py-1.5 rounded-full',
              painting.isAvailable
                ? 'bg-gradient-to-r from-green-600 to-emerald-600'
                : 'bg-gradient-to-r from-blue-600 to-sky-600',
            )}
          >
            {painting.isAvailable ? 'Available' : 'Sold'}
          </div>
        </div>
      </div>
    </Modal>
  );
}
