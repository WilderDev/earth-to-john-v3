import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Button from '@/components/ui/Button';
import CloudImage from '@/components/ui/CloudImage';
import { baseUrl } from '@/lib/common/site.helpers';
import cn from '@/lib/common/style.helpers';
import sluggify from '@/lib/common/url.helpers';
import { getAllPaintings } from '@/lib/database/getAllPaintings';
import { getPaintingBySlug } from '@/lib/database/getPaintingBySlug';

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
  const painting = await getPaintingBySlug(slug);

  // * Render
  return (
    <Main>
      <Container>
        {/* Body */}
        <div className="flex flex-col lg:flex-row lg:justify-center gap-6 lg:gap-y-0 w-full min-h-[250px] lg:min-h-0">
          {/* Image */}
          <CloudImage
            className="w-full lg:w-auto lg:h-[85vh] h-full"
            src={painting.imageUrl}
            alt={painting.title}
            width={1920}
            height={1080}
          />

          {/* Details */}
          <div className="flex flex-col w-full lg:w-96 lg:self-center relative">
            {/* Top */}
            <div className="lg:mt-6">
              {/* Name */}
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
                {painting.title}
              </h1>

              {/* Description */}
              <p className="text-stone-600 italic mt-2">
                {painting.description}
              </p>

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
      </Container>
    </Main>
  );
}

// * Static Paths
export async function generateStaticParams() {
  const paintings = await getAllPaintings();

  return paintings.map(({ title }) => ({
    slug: sluggify(title),
  }));
}

// * Metadata
export async function generateMetadata({ params: { slug } }: IParams) {
  const painting = await getPaintingBySlug(slug);

  return {
    title: painting.title,
    description: painting.description,
    image: painting.imageUrl,
    openGraph: {
      images: [painting.imageUrl],
    },
  };
}
