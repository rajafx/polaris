// src/app/layout.tsx
import { Inter } from 'next/font/google';
import { DESIGN_TOKENS } from '@/styles/designTokens';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

// Font sans-serif untuk body
const inter = Inter({ subsets: ['latin'] });

// Metadata
export const metadata = {
  title: 'PT Polaris Dana Investment',
  description: 'Your Trusted Partner in Investment, Project Development, and Strategic Growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font serif untuk heading — Cormorant Garamond */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}