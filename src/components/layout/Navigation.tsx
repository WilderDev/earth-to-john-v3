import { INavItem } from '@/assets/typescript/ui';
import Container from './Container';
import Link from 'next/link';

const navigationItems: INavItem[] = [
  {
    name: 'Gallery',
    path: '/gallery',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  // IDEA: /shows or /events
  // IDEA: /shop or /store or /prints
];

// * Component
export default function Navigation() {
  // * Render
  return (
    <nav className="z-30 relative py-3 sm:py-5 w-full shadow-md bg-white/50">
      <Container>
        {/* List */}
        <ul className="flex items-center justify-around flex-wrap sm:flex-nowrap sm:justify-normal sm:space-x-8">
          {/* Logo Text */}
          <li className="sm:mr-auto w-full text-center mt-1 sm:mt-0 sm:w-auto sm:text-left mb-2 sm:mb-0">
            <Link
              className="group font-sans font-medium sm:text-xl md:text-2xl"
              href="/"
            >
              <span className="text-green-700 group-focus:text-green-600 group-hover:text-green-600 transition-colors duration-300">
                Earth
              </span>{' '}
              <span className="group-focus:text-stone-800 group-hover:text-stone-800 transition-colors duration-300">
                to John
              </span>
            </Link>
          </li>

          {/* Items */}
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link
                className="text-xs sm:text-base md:text-lg font-serif tracking-wide text-stone-600 hocus:text-stone-900 transition-colors duration-300"
                href={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
