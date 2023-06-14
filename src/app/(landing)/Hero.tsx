import Image from 'next/image';
import Button from '@/components/ui/Button';
import Captivating from '@/assets/images/paintings/Captivating.jpg';
import DreamWithUs from '@/assets/images/paintings/Dream_With_Us.jpg';
import { PaintBrushIcon } from '@heroicons/react/24/solid';

// * Component
export default function LandingHero() {
  // * Render
  return (
    <section id="hero" className="relative isolate z-20 lg:pb-20">
      {/* Background */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c084fc] to-[#7dd3fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl font-sans">
              Authentic & Original{' '}
              <span className="text-green-900 block mt-2">Oil Paintings</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-6 text-lg sm:text-2xl lg:text-3xl leading-8 text-stone-600">
              by John &ldquo;Obi&rdquo; Carman
            </p>

            {/* CTA */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6">
              <Button
                size="xl"
                effect="scale"
                icon={<PaintBrushIcon className="w-4 h-4" />}
                href="/gallery"
              >
                View Gallery
              </Button>

              <Button
                className="leading-6"
                size="sm"
                variant="light"
                fill="ghost"
                shadow="none"
                href="/about"
              >
                About the Artist <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="flex flex-col sm:flex-row justify-between gap-x-10 mt-6 sm:mt-0">
            <Image
              className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24 w-full sm:w-[48%]"
              src={Captivating}
              alt="Captivating Oil Painting by John Carman"
              placeholder="blur"
              priority={true}
              blurDataURL={Captivating.src}
            />

            <Image
              className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24 hidden sm:block sm:w-[48%]"
              src={DreamWithUs}
              alt="Dream With Us Oil Painting by John Carman"
              placeholder="blur"
              priority={true}
              blurDataURL={DreamWithUs.src}
            />
          </div>
        </div>
      </div>

      {/* Background */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#c084fc] to-[#7dd3fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}
