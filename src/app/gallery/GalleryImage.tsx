import CloudImage from '@/components/ui/CloudImage';
import sluggify from '@/lib/common/url.helpers';
import Link from 'next/link';

// * Props
interface IProps {
  name: string;
  imageUrl: string;
}

// * Component
export default function GalleryImage({ name, imageUrl }: IProps) {
  // * Render
  return (
    <Link className="block group" href={`/gallery/${sluggify(name)}`}>
      <CloudImage
        className="ring-2 ring-offset-2 ring-transparent opacity-95 group-hover:shadow-xl group-hover:opacity-100 group-focus:shadow-xl group-focus:opacity-100 transition-all duration-200 ease-in-out group-hover:ring-green-500 group-focus:ring-green-500"
        src={imageUrl}
        alt={name}
        priority={true}
      />

      <p className="mt-2 text-sm font-medium text-center text-stone-600">
        {name}
      </p>
    </Link>
  );
}
