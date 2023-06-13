import Main from '@/components/layout/Main';
import LandingHero from './Hero';
import LandingArtShows from './ArtShows';
import LandingGalleryCTA from './GalleryCTA';

// * Page
export default function LandingPage() {
  // * Render
  return (
    <Main>
      <LandingHero />

      <LandingArtShows />

      <LandingGalleryCTA />
    </Main>
  );
}
