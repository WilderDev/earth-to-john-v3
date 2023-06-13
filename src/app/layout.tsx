import '@/assets/styles/globals.css';
import { PropsWithChildren } from 'react';
import { JosefinSansFont, LatoFont } from '@/lib/theme/fonts';
import cn from '@/lib/common/style.helpers';

// * Layout
export default function RootLayout({ children }: PropsWithChildren) {
  // * Render
  return (
    <html lang="en">
      <body className={cn(JosefinSansFont.variable, LatoFont.variable)}>
        {children}
      </body>
    </html>
  );
}

// * Metadata
export const metadata = {
  title: 'Earth to John',
  description: 'TSK',
};
