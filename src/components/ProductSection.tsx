import ProductCard, { Product } from '@/components/ProductCard';

interface ProductSectionProps {
  title?: string;
  products: Product[];
}

export default function ProductSection({
  title = 'Featured Reviews & Products',
  products,
}: ProductSectionProps) {
  return (
    <section className="py-8">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}