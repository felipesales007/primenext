import type { Metadata } from 'next';
import favicon from '@/public/favicon.ico';
import '@/styles/globals.css';

export const metadata: Metadata = {
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
