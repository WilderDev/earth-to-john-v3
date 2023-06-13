import cn from '@/lib/common/style.helpers';

// * Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// * Component
export default function Title({ children, className }: IProps) {
  // * Render
  return <h1 className={cn('text-4xl font-bold', className)}>{children}</h1>;
}
