import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechPulse — Tech Reviews & Buying Guides',
  description: 'In-depth tech gear reviews, buying guides, and side-by-side product comparisons.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col antialiased`}>
        {/* Top FTC Disclosure Bar */}
        <AffiliateDisclosure />

        {/* Navigation Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Full Footer Component */}
        <Footer />
      </body>
    </html>
  );
}