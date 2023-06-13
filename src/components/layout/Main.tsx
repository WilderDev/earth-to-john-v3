import cn from '@/lib/common/style.helpers';

// * Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// * Component
export default function Main({ children, className }: IProps) {
  // * Render
  return (
    <main className={cn('py-4 sm:py-6 md:py-8', className)}>{children}</main>
  );
}
