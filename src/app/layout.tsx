import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tech Reviews & Buying Guides',
  description: 'In-depth tech gear reviews and side-by-side product comparisons.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col antialiased`}>
        {/* FTC / Amazon Disclosure Header */}
        <AffiliateDisclosure />

        {/* Main Navigation Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white py-8 mt-12 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Tech Reviews. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}