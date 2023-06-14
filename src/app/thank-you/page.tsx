import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Link from 'next/link';

// * Page
export default function ThankYouPage() {
  // * Render
  return (
    <Main className="h-[70vh]">
      <Container>
        <div
          className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full -z-10"
          aria-hidden="true"
        >
          <div className="relative mx-auto h-full max-w-7xl">
            <svg
              className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
          </div>
        </div>

        <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Thank You</span>{' '}
              <span className="block text-green-600 xl:inline">
                For the Message!
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              I will get back to you as soon as possible.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="z-50 rounded-md shadow">
                <Link
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 md:py-4 md:px-10 md:text-lg"
                  href="/gallery"
                >
                  View the Gallery
                </Link>
              </div>

              <div className="z-50 mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-green-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                  href="/"
                >
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Main>
  );
}

// * Metadata
export const metadata = {
  title: 'Thank You',
  description:
    'Thank you for submitting a message. We will get back to you shortly!',
};
