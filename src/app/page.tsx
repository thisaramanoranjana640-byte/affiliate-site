import ProductSection from '@/components/ProductSection';
import { products } from '@/data/products';

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-2">Tech Product Reviews</h1>
      <p className="text-gray-600 mb-8">
        In-depth reviews, expert testing, and real-time price comparisons.
      </p>

      <ProductSection title="Top Recommended Gear" products={products} />
    </main>
  );
}
