import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TopPicks - Independent Tech Reviews & Buyer's Guides",
  description:
    "Discover top-rated tech, gadgets, and office gear with in-depth reviews, pros/cons, and unbiased buying recommendations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
      {/* Replace G-XXXXXXXXXX with your actual Google Analytics ID */}
      <GoogleAnalytics gaId="G-50DS9DV56C" />
    </html>
  );
}