import CloudImage from '@/components/ui/CloudImage';

// * Component
export default function LandingLargeImage() {
  // * Render
  return (
    <section id="image" className="mt-6 block w-screen">
      <CloudImage
        className="w-screen h-screen object-cover"
        src="https://res.cloudinary.com/dl54erra0/image/upload/v1686746027/Green_Envy_as3pwe.webp"
        alt="Green Envy Oil Painting by John Carman"
        width={3840}
        height={2560}
      />
    </section>
  );
}
