import cn from '@/lib/common/style.helpers';

// * Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// * Component
export default function Container({ children, className }: IProps) {
  // * Render
  return (
    <div className={cn('container mx-auto px-4', className)}>{children}</div>
  );
}
