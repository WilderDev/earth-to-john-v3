import { PhoneIcon } from '@heroicons/react/24/solid';
import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Image from 'next/image';

import JohnCarmanContactImage from '@/assets/images/john/john-carman-art-show-family.jpeg';
import ContactForm from './ContactForm';

// * Page
export default function ContactPage() {
  // * Render
  return (
    <Main className="pb-0 sm:pb-0 md:pb-0">
      <Container className="px-0">
        <div className="py-12 sm:py-16 pb-20">
          <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-center text-4xl font-extrabold leading-10 tracking-tight text-stone-900 sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-stone-500">
              I&apos;d love to hear from you! Whether you are sending an inquiry
              about purchasing a large, original painting or just want to say
              hi, I will respond to any question within 2 business days (and
              usually sooner than that!)
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:-inset-y-1 lg:right-0 lg:w-1/2">
              <Image
                className="h-96 lg:h-full w-full object-cover"
                src={JohnCarmanContactImage}
                alt="John Carman with his two grand-daughters Rosie and Lily"
                priority
              />
            </div>
          </div>

          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
            <div className="lg:pr-8">
              <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Let&apos;s work together
                </h2>
                <p className="mt-4 text-lg text-stone-500 sm:mt-3">
                  My hope is you are delighted with the artwork and excited to
                  hang it in your home or office. Please do not hesitate to
                  contact me at carman.john@icloud.com.
                </p>

                {/* Form */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-700 lg:relative lg:z-40">
          <div className="mx-auto max-w-md py-16 px-4 text-center sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              <span className="block text-white">See a painting you like?</span>
              <span className="mt-1 block text-green-200">
                Check if it&apos;s available.
              </span>
            </h2>

            <a
              href="tel:630-306-0100"
              className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white py-3 px-5 text-base font-medium text-green-700 shadow-md hover:bg-green-50 sm:w-auto"
            >
              <span className="text-lg font-semibold">Call John today</span>

              <PhoneIcon
                className="ml-3 h-5 w-5 flex-shrink-0 text-stone-500"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </Container>
    </Main>
  );
}

// * Metadata
export const metadata = {
  title: 'Contact',
  description:
    'Contact John Carman via email or phone to discuss his paintings or purchasing artwork.',
};

// TSK: Pull in query params and update subject if exists
