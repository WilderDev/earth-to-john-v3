import { IFeaturedTestimonial, ITestimonial } from '@/assets/typescript/ui';
import cn from '@/lib/common/style.helpers';
import Image from 'next/image';

import RosiesButterfly from '@/assets/images/paintings/Rosies_Butterfly.jpg';
import SleepingUnderTheTrees from '@/assets/images/paintings/Sleeping_Under_the_Trees.jpg';
import LilysDragonfly from '@/assets/images/paintings/Lilys_Dragonfly.jpg';
import Captivating from '@/assets/images/paintings/Captivating.jpg';

// * Data
const featuredTestimonial: IFeaturedTestimonial = {
  message:
    'We are grateful to have three John Carman originals. Our home is carefully and lovingly curated with art, photos and plants that bring us joy and peace every day. Every piece John creates is an organic masterpiece full of depth, texture and whimsical inspiration from nature',
  author: {
    name: 'Kevin & Caroline Rogers',
    painting: 'Lily‘s Dragonfly | Sonoma Sunrise',
    imageUrl: LilysDragonfly,
  },
};

const testimonials: ITestimonial[][][] = [
  [
    [
      {
        message:
          'After seeing John‘s artwork, my husband and I asked John to create a custom painting. He created a piece of artwork that was very personal as well as beautiful - he captured exactly what we were hoping for. He even scribed a special message on the back - this is something we will treasure for the rest of our lives. I love John‘s artwork and have purchased prints of some of his other pieces. His work is unique and beautiful and we have received many compliments on our painting',
        author: {
          name: 'Jan Held',
          painting: 'TSK',
          imageUrl: Captivating,
        },
      },
      // More testimonials...
    ],
    [
      {
        message:
          'John‘s artwork brings the harmony and beauty of the natural world into our home. He is a wonderful artist, he captures the world with each brush stroke. We feel fortunate to own both original and reproduction pieces of his artwork, and we love them all. When we recently moved, it didn‘t feel like home until we hung up John‘s paintings.',
        author: {
          name: 'Jenny & Jeff Pozen',
          painting: 'TSK',
          imageUrl: Captivating,
        },
      },

      // More testimonials...
    ],
  ],
  [
    [
      {
        message:
          'His paintings bring peace and beauty to our lives. We receive overwhelmingly positive comments and compliments on his artwork from guests visiting our home. Having his artwork adorning our walls really makes our home feel like a home.',
        author: {
          name: 'Sara Rix',
          painting: 'Mouse Hunter | Freedom',
          imageUrl: RosiesButterfly,
        },
      },
      // More testimonials...
    ],
    [
      {
        message:
          'We absolutely love John Carman‘s work. We have several pieces throughout our house. The colors and detail are amazing! A gifted artist for sure. I love seeing all of his new pieces as well. I‘m looking forward to my next purchase of his work.',
        author: {
          name: 'Judi & Terry Huels',
          painting: 'Sleeping Under the Trees | Sacred Space | Bull Valley',
          imageUrl: SleepingUnderTheTrees,
        },
      },
      {
        message: 'Love his work! I need another one. Just love them!',
        author: {
          name: 'Lisa O‘Malley',
          painting: 'TSK',
          imageUrl: Captivating,
        },
      },
      // More testimonials...
    ],
  ],
];

// * Component
export default function LandingTestimonials() {
  // * Render
  return (
    <section
      id="testimonials"
      className="relative isolate pb-32 pt-24 sm:pt-32"
    >
      {/* Background 1 */}
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#c084fc] to-[#7dd3fc]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Background 2 */}
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#c084fc] to-[#7dd3fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-600">
            Endorsements
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Here&apos;s what others are saying about John&apos;s Artwork
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-stone-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {/* Featured Testimonial */}
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-stone-900/5 xl:col-start-2 xl:row-end-1">
            {/* Title */}
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-stone-900">
              <p>{`“${featuredTestimonial.message}”`}</p>
            </blockquote>

            {/* Author */}
            <figcaption className="flex items-center gap-x-4 border-t border-stone-900/10 px-6 py-4">
              {/* Author Image */}
              <Image
                className="h-10 w-10 flex-none rounded-full bg-stone-50"
                src={featuredTestimonial.author.imageUrl}
                alt={featuredTestimonial.author.painting}
              />

              {/* Author Info */}
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-stone-600 text-xs mt-1">
                  {featuredTestimonial.author.painting}
                </div>
              </div>

              {/* Author Logo */}
              {/* <img
                className="h-10 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
              /> */}
            </figcaption>
          </figure>

          {/* Other Testimonials */}
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={cn(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-stone-900/5"
                      key={testimonial.author.name}
                    >
                      <blockquote className="text-stone-900">
                        <p>{`“${testimonial.message}”`}</p>
                      </blockquote>

                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          className="h-10 w-10 rounded-full bg-stone-50"
                          src={testimonial.author.imageUrl}
                          alt={testimonial.author.painting}
                        />

                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>

                          <div className="text-stone-600 text-xs mt-1">
                            {testimonial.author.painting}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
