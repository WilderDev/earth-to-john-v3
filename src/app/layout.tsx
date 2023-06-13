import '@/assets/styles/globals.css';
import { PropsWithChildren } from 'react';
import { JosefinSansFont, LatoFont } from '@/lib/theme/fonts';
import cn from '@/lib/common/style.helpers';
import Navigation from '@/components/layout/Navigation';
import { defaultMetadata } from '@/lib/meta/defaultMetadata';

// * Layout
export default function RootLayout({ children }: PropsWithChildren) {
  // * Render
  return (
    <html lang="en">
      <body className={cn(JosefinSansFont.variable, LatoFont.variable)}>
        {/* Navigation */}
        <Navigation />

        {/* Page */}
        {children}
      </body>
    </html>
  );
}

// * Metadata
export const metadata = defaultMetadata;
