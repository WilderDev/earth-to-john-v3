import Main from '@/components/layout/Main';
import LandingHero from './Hero';
import LandingArtShows from './ArtShows';
import LandingGalleryCTA from './GalleryCTA';
import LandingTestimonials from './Testimonials';
import LandingLargeImage from './LargeImage';

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
