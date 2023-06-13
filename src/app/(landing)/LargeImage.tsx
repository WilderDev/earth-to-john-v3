import Image from 'next/image';

import GreenEnvy from '@/assets/images/paintings/Green_Envy.webp';

// * Component
export default function LandingLargeImage() {
  // * Render
  return (
    <section id="image" className="mt-6 block w-screen">
      <Image
        className="w-screen h-screen object-cover"
        src={GreenEnvy}
        alt="Green Envy by John Carman"
        quality={100}
      />
    </section>
  );
}
