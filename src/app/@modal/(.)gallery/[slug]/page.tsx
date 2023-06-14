import Modal from '@/components/layout/Modal';
import Button from '@/components/ui/Button';
import CloudImage from '@/components/ui/CloudImage';
import { baseUrl } from '@/lib/common/site.helpers';
import cn from '@/lib/common/style.helpers';
import sluggify from '@/lib/common/url.helpers';
import { getPaintingBySlug } from '@/lib/database/getPaintingBySlug';
import HeaderLink from './HeaderLink';

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
  const painting = await getPaintingBySlug(slug);

  // * Render
  return (
    <Modal>
      {/* Body */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-y-0 w-full min-h-[250px] lg:min-h-0">
        {/* Image */}
        <CloudImage
          className="w-full lg:w-1/2 h-full lg:my-auto"
          src={painting.imageUrl}
          alt={painting.title}
        />

        {/* Details */}
        <div className="flex flex-col w-full lg:w-1/2 lg:min-h-full justify-between relative">
          {/* Top */}
          <div className="lg:mt-6">
            {/* Name */}
            <HeaderLink name={painting.title} />

            {/* Description */}
            <p className="text-stone-600 italic mt-2">{painting.description}</p>

            {/* Dimensions */}
            <p className="text-stone-600 mt-2">{painting.dimensions}</p>
          </div>

          {/* Inquire (CTA) */}
          <Button
            className="mt-6"
            href={baseUrl + `/contact?painting=${sluggify(painting.title)}`}
            shadow="lg"
          >
            Inquire
          </Button>

          {/* Availability */}
          <div
            className={cn(
              'absolute top-0 right-0 -m-2 lg:-m-4 text-xs font-bold text-white px-3.5 py-1.5 rounded-full',
              painting.print.isAvailable
                ? 'bg-gradient-to-r from-green-600 to-emerald-600'
                : 'bg-gradient-to-r from-blue-600 to-sky-600',
            )}
          >
            {painting.print.isAvailable ? 'Available' : 'Sold'}
          </div>
        </div>
      </div>
    </Modal>
  );
}
