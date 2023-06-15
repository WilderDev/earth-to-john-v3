import Main from '@/components/layout/Main';
import LandingHero from './Hero';
import LandingArtShows from './ArtShows';
import LandingGalleryCTA from './GalleryCTA';
import LandingTestimonials from './Testimonials';
import dynamic from 'next/dynamic';

// * Dynamic Imports
const LandingLargeImage = dynamic(() => import('./LargeImage'), {
  loading: () => (
    <section id="image" className="mt-6 block w-screen">
      <div className="w-screen h-screen bg-gray-200 animate-pulse" />
    </section>
  ),
});

// * Page
export default function LandingPage() {
  // * Render
  return (
    <Main className="pb-0 sm:pb-0 md:pb-0">
      <LandingHero />

      <LandingArtShows />

      <LandingGalleryCTA />

      <LandingTestimonials />

      <LandingLargeImage />
    </Main>
  );
}
