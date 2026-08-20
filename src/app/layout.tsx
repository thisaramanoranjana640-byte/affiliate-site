import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TopPicks - Independent Tech Reviews & Buyer's Guides",
  description:
    "Discover top-rated tech, gadgets, and office gear with in-depth reviews, pros/cons, and unbiased buying recommendations.",
  keywords: ["tech reviews", "best gadgets", "affiliate gear", "buying guides"],
  openGraph: {
    title: "TopPicks - Independent Tech Reviews",
    description: "In-depth reviews and buyer's guides to help you make informed decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}