import Button from '@/components/ui/Button';
import CloudImage from '@/components/ui/CloudImage';

// * Component
export default function LandingGalleryCTA() {
  // * Render
  return (
    <section id="gallery" className="overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        {/* Body */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          {/* Content */}
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Check out the Gallery
            </h2>

            <p className="mt-6 text-xl leading-8 text-stone-600">
              My passion for creating art has been a part of my life since
              infancy, with cherished memories of drawing at my
              grandparents&apos; house using a coffee can full of crayons.
            </p>

            <p className="mt-6 text-base leading-7 text-stone-600">
              My latest works serve as a testament to this passion, reflecting
              an expansive repertoire of artistic experiences. I warmly invite
              you to check out the gallery, where each new painting reveals a
              unique facet of my creative journey.
            </p>

            <div className="mt-10 flex">
              <Button size="lg" shadow="md" effect="scale" href="#">
                View More Paintings <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </div>

          {/* Gallery Images */}
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            {/* Image 1 */}
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <CloudImage
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-stone-50 object-cover"
                src="https://res.cloudinary.com/dl54erra0/image/upload/v1686746024/Fall_Meditation_qrcw0m.jpg"
                alt="Fall Meditation Oil Painting by John Carman"
                width={1874}
                height={1228}
              />
            </div>

            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              {/* Image 2 */}
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <CloudImage
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-stone-50 object-cover"
                  src="https://res.cloudinary.com/dl54erra0/image/upload/v1686746062/Lily_Lake_jslebx.jpg"
                  alt="Lily Lake Oil Painting by John Carman"
                  width={1520}
                  height={1515}
                />
              </div>

              {/* Image 3 */}
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <CloudImage
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-stone-50 object-cover"
                  src="https://res.cloudinary.com/dl54erra0/image/upload/v1686746042/Rider_on_the_Storm_ma3z3s.jpg"
                  alt="Rider On The Storm Oil Painting by John Carman"
                  width={976}
                  height={647}
                />
              </div>

              {/* Image 4 */}
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <CloudImage
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-stone-50 object-cover"
                  src="https://res.cloudinary.com/dl54erra0/image/upload/v1686746044/September_Sunrise_vyffzp.jpg"
                  alt="September Sunrise Oil Painting by John Carman"
                  width={824}
                  height={615}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
