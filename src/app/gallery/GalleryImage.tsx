import sluggify from '@/lib/common/url.helpers';
import Image from 'next/image';
import Link from 'next/link';

// * Props
interface IProps {
  name: string;
  imageUrl: string;
  width: number;
  height: number;
}

// * Component
export default function GalleryImage({
  name,
  imageUrl,
  width,
  height,
}: IProps) {
  // * Render
  return (
    <Link className="block group" href={`/gallery/${sluggify(name)}`}>
      <Image
        className="object-contain w-full rounded-md ring-2 ring-offset-2 ring-transparent opacity-95 shadow-md group-hover:shadow-xl group-hover:opacity-100 group-focus:shadow-xl group-focus:opacity-100 transition-all duration-200 ease-in-out group-hover:ring-green-500 group-focus:ring-green-500"
        src={process.env.CLOUDFLARE_BUCKET_URL + imageUrl}
        alt={name}
        width={width}
        height={height}
        priority={true}
      />

      <p className="mt-2 text-sm font-medium text-center text-gray-600">
        {name}
      </p>
    </Link>
  );
}
