import ProductSection from '@/components/ProductSection';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8">Featured Products</h1>
      <ProductSection title="Top Picks" products={products} />
    </main>
  );
}