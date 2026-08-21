import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

interface ProductSectionProps {
  title: string;
  products: Product[];
}

export default function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
}