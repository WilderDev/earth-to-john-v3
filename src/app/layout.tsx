import '@/assets/styles/globals.css';
import { PropsWithChildren } from 'react';
import { JosefinSansFont, LatoFont } from '@/lib/theme/fonts';
import cn from '@/lib/common/style.helpers';
import Navigation from '@/components/layout/Navigation';
import { defaultMetadata } from '@/lib/meta/defaultMetadata';
import Footer from '@/components/layout/Footer';

// * Props
interface IProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

// * Layout
export default function RootLayout({ children, modal }: IProps) {
  // * Render
  return (
    <html lang="en">
      <body className={cn(JosefinSansFont.variable, LatoFont.variable)}>
        {/* Navigation */}
        <Navigation />

        {/* Page */}
        {children}

        {/* Modal */}
        {modal}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

// * Metadata
export const metadata = defaultMetadata;
