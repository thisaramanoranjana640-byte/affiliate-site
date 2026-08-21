import ProductSection from '@/components/ProductSection';
import ComparisonTable from '@/components/ComparisonTable';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-2">Tech Gear Reviews</h1>
      <p className="text-gray-600 mb-8">
        Tested, rated, and compared side-by-side.
      </p>

      <ProductSection title="Featured Headset Reviews" products={products} />

      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">
        Side-by-Side Comparison
      </h2>
      <ComparisonTable products={products} />
    </main>
  );
}