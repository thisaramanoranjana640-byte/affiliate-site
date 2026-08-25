import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedGuides from '@/components/FeaturedGuides';
import LatestReviews from '@/components/LatestReviews';
import TrustSection from '@/components/TrustSection';
import ProductCatalog from '@/components/ProductCatalog';
import ComparisonTable from '@/components/ComparisonTable';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <Hero />

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto p-8 space-y-16">
        {/* Popular Categories */}
        <CategoryGrid />

        {/* Featured Comparison Guides */}
        <FeaturedGuides />

        {/* Hands-On Single Product Reviews */}
        <LatestReviews products={products} />

        {/* Why Trust Us & Affiliate Disclosure */}
        <TrustSection />

        {/* Catalog & Filter Grid */}
        <section id="best-picks">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              All Reviewed Gear
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Browse our complete catalog with live price tracking.
            </p>
          </div>
          <ProductCatalog initialProducts={products} />
        </section>

        {/* Specs Comparison Table */}
        <section id="reviews">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Side-by-Side Comparison
            </h2>
          </div>
          <ComparisonTable products={products} />
        </section>
      </div>
    </main>
  );
}