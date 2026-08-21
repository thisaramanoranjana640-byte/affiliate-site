import ProductCatalog from '@/components/ProductCatalog';
import ComparisonTable from '@/components/ComparisonTable';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-2">Tech Gear Reviews</h1>
      <p className="text-slate-600 mb-8">
        In-depth testing, real-time price tracking, and side-by-side comparisons.
      </p>

      <ProductCatalog initialProducts={products} />

      <h2 className="text-2xl font-bold mt-16 mb-4 text-slate-900">
        Side-by-Side Comparison
      </h2>
      <ComparisonTable products={products} />
    </main>
  );
}