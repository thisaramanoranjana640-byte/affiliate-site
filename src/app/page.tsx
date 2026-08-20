import Link from "next/link";
import ProductSection from "@/components/ProductSection";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import Footer from "@/components/Footer";
import { FeaturedProducts } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      <div>
        {/* FTC Legal Disclosure Banner */}
        <AffiliateDisclosure />

        {/* Navigation Bar */}
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <span className="text-xl font-bold text-indigo-600">TopPicks</span>
            <nav className="space-x-6">
              <Link href="/" className="hover:text-indigo-600 font-medium">Home</Link>
              <Link href="#featured" className="hover:text-indigo-600 font-medium">Reviews</Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center py-20 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Unbiased Reviews for the Best Tech & Gear
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We test and compare top-rated products so you can buy with confidence. Find the best deals and top recommendations.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#featured"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Explore Top Recommendations
            </a>
          </div>
        </section>

        {/* Filterable Product Section */}
        <ProductSection products={FeaturedProducts} />
      </div>

      {/* Site Footer */}
      <Footer />
    </main>
  );
}
