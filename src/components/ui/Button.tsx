import Link from 'next/link';

// * Props
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'dark' | 'light';
  fill?: 'solid' | 'outline' | 'ghost';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  effect?: 'none' | 'opacity' | 'scale' | 'translate' | 'rotate';
  href?: string;
  icon?: React.ReactNode;
  loading?: boolean;
  className?: string;
}

// * Component
export default function Button({
  size = 'md',
  variant = 'primary',
  fill = 'solid',
  rounded = 'md',
  shadow = 'sm',
  effect = 'none',
  href,
  className = '',
  children,
  icon,
  loading,
  ...props
}: IProps) {
  // * Styles
  // Default styles
  const defaultStyles =
    'inline-flex items-center font-serif justify-center gap-x-2 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-800 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out';

  // Size styles
  const sizeStyles = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-4 py-2 text-base',
    xl: 'px-6 py-2.5 text-lg',
  };

  // Variant styles
  const variantStyles = {
    primary: {
      solid: 'bg-green-600 text-stone-50 hocus:bg-green-700',
      outline:
        'bg-stone-50 text-green-600 border border-green-600 hocus:bg-green-50 hocus:text-green-700',
      ghost:
        'bg-transparent text-green-600 hocus:bg-green-50 hocus:text-green-700',
    },
    secondary: {
      solid: 'bg-stone-600 text-stone-50 hocus:bg-stone-700',
      outline:
        'bg-stone-50 text-stone-600 border border-stone-600 hocus:bg-stone-50 hocus:text-stone-700',
      ghost:
        'bg-transparent text-stone-600 hocus:bg-stone-50 hocus:text-stone-700',
    },
    dark: {
      solid: 'bg-stone-900 text-stone-50 hocus:bg-stone-700',
      outline:
        'bg-stone-50 text-stone-900 border border-stone-900 hocus:bg-stone-50 hocus:text-stone-700',
      ghost:
        'bg-transparent text-stone-900 hocus:bg-stone-50 hocus:text-stone-700',
    },
    light: {
      solid: 'bg-stone-50 text-stone-900 hocus:bg-stone-700',
      outline:
        'bg-stone-900 text-stone-50 border border-stone-900 hocus:bg-stone-50 hocus:text-stone-700',
      ghost:
        'bg-transparent text-stone-600 hocus:bg-stone-50 hocus:text-stone-800',
    },
  };

  // Rounded styles
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  // Shadow styles
  const shadowStyles = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  // Effect styles
  const effectStyles = {
    none: '',
    opacity: 'hocus:opacity-80',
    scale: 'hocus:scale-105 transform-gpu',
    translate: 'hocus:-translate-y-0.5',
    rotate: 'hocus:rotate-1',
  };

  // * Classes
  const defaultClasses = `${defaultStyles} ${sizeStyles[size]} ${variantStyles[variant][fill]} ${roundedStyles[rounded]} ${shadowStyles[shadow]} ${effectStyles[effect]} ${className}`;

  // * Render
  return href ? (
    href.startsWith('http') ? (
      <a
        className={defaultClasses}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children} {icon && icon}
      </a>
    ) : (
      <Link className={defaultClasses} href={href}>
        {children} {icon && icon}
      </Link>
    )
  ) : (
    <button className={defaultClasses} {...props}>
      {children} {icon && icon}
    </button>
  );
}
