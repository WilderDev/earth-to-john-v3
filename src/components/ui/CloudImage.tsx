'use client';

import cn from '@/lib/common/style.helpers';
import { CldImage } from 'next-cloudinary';

// * Props
interface IProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  [key: string]: any;
}

// * Component
export default function CloudImage({
  src,
  alt,
  width = 500,
  height = 500,
  priority = false,
  className,
  ...props
}: IProps) {
  // * Render
  return (
    <CldImage
      className={cn('object-contain rounded-lg shadow-lg', className)}
      src={src}
      alt={alt}
      quality={100}
      width={width}
      height={height}
      priority={priority}
      {...props}
    />
  );
}
