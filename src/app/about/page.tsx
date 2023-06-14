import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Image from 'next/image';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

import JDCArtistImage from '@/assets/images/john/JDC_Artist.jpg';

// * Page
export default function AboutPage() {
  // * Render
  return (
    <Main>
      <Container>
        <div className="relative isolate overflow-hidden px-6 py-12 sm:py-16 lg:overflow-visible lg:px-0">
          {/* Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-stone-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-stone-100">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            {/* Header */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-green-600">
                    John Carman
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                    Meet the Artist
                  </h1>

                  <p className="mt-6 text-xl leading-8 text-stone-700">
                    I welcome you to experience the way I visually create my
                    world through the use of brush stroke, design, emotion and
                    oil paint.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <Image
                className="w-[48rem] max-w-none rounded-xl bg-stone-900 shadow-xl ring-1 ring-stone-400/10 sm:w-[57rem]"
                src={JDCArtistImage}
                alt="John Carman painting three new pieces of artwork in his studio."
                priority
              />
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-stone-700 lg:max-w-lg">
                  {/* Paragraph 1 */}
                  <p>
                    I have loved creating art since the age of one. I experience
                    fond memories - on an emotional level - visiting my
                    grandparents&apos; house, just lying on the floor drawing
                    with a big old coffee can filled with crayons. Throughout my
                    life that creativity has manifested in many artistic outlets
                    from art school to corporate projects, landscape design to
                    seasonal displays, graphic design and logo design,
                    illustration, architectural design, and teaching art.
                  </p>

                  {/* Paragraph 2 */}
                  <p className="mt-6">
                    Somewhat older now, I am still that child with his coffee
                    can full of crayons…I just prefer the feel and depth of oil
                    paints and spend less time laying on the floor.
                  </p>

                  {/* List */}
                  <ul role="list" className="mt-8 space-y-8 text-stone-600">
                    <li className="flex gap-x-3">
                      <CloudArrowUpIcon
                        className="mt-1 h-5 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-stone-900">
                          Subject Matter:
                        </strong>{' '}
                        My art is focused on the beauty perceived in nature.
                        Landscapes and flowers are the general theme. All
                        subject matter begins from a concept – perspective from
                        my mind or experience, then impressionistically brought
                        to life based on visual and emotional cues throughout
                        the painting process. The goal while painting is to get
                        myself out of the way and let the painting dictate the
                        finished product.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockClosedIcon
                        className="mt-1 h-5 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-stone-900">
                          Large Oil Paintings:
                        </strong>{' '}
                        As I progress through the years in the art of oil
                        painting, the size of my canvas continues to increase.
                        This has enabled me to express my style in a more direct
                        and emotionally impactful method.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <ServerIcon
                        className="mt-1 h-5 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-stone-900">
                          Continuous Evolution:
                        </strong>{' '}
                        As an artist in this medium, my main goals are to allow
                        my art to become even more reductive with greater impact
                        to represent an immediate expression and illustrate the
                        beauty I experience in life.
                      </span>
                    </li>
                  </ul>

                  {/* Paragraph 3 */}
                  <p className="mt-8">
                    I will always be a work in progress. I view my relationship
                    to the world as one that exhibits strength and leadership
                    through compassion, personal integrity, and being
                    accountable for my actions.
                  </p>

                  {/* Paragraph 4 */}
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-stone-900">
                    Outside of Art (Why &ldquo;Obi&rdquo;?)
                  </h2>
                  <p className="mt-6">
                    The best part of my life has and does revolve around the
                    bond with my children and grandchildren. I am grateful for
                    the grace and joy that I have had the privilege to
                    experience life with my children and grandchildren through
                    the years. I am equally fortunate to have a lifetime
                    relationship with my best friend, wife, and my love. I am
                    fully supported to follow my artistic talents solely because
                    of her love for me.
                  </p>

                  {/* Paragraph 5 */}
                  <p className="mt-6">
                    I became a grandfather in 2016 and my 4 grandchildren
                    affectionately call me &ldquo;Obi&rdquo;. By default, my
                    entire life is impacted by my grandchildren &ndash; they are
                    a part of everything I do now and how I view the world
                    &ndash; hence, I now sign all my artwork &ldquo;Obi&rdquo;.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
}

// * Metadata
export const metadata = {
  title: 'About',
  description:
    'Learn about John Carman as an artists, and what he enjoys outside of creating beautiful nature-themed large oil paintings.',
};
