import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import ProductCatalog from '@/components/ProductCatalog';
import ComparisonTable from '@/components/ComparisonTable';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Full-width Hero Banner */}
      <Hero />

      {/* 2. Main content container */}
      <div className="max-w-6xl mx-auto p-8 space-y-16">
        
        {/* Popular Categories Grid Section */}
        <CategoryGrid />

        {/* Best Picks & Product Catalog Section */}
        <section id="best-picks">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Best Picks & Reviews
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              In-depth testing, real-time price tracking, and hands-on evaluations.
            </p>
          </div>
          <ProductCatalog initialProducts={products} />
        </section>

        {/* Side-by-Side Comparison Table Section */}
        <section id="reviews">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Side-by-Side Comparison
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Compare specs, ratings, and features across top models.
            </p>
          </div>
          <ComparisonTable products={products} />
        </section>

      </div>
    </main>
  );
}