import Link from 'next/link';
import { Product } from '@/types/product';

interface RelatedReviewsProps {
  currentSlug: string;
  products: Product[];
}

export default function RelatedReviews({ currentSlug, products }: RelatedReviewsProps) {
  // Filter out current product and select up to 3 recommendations
  const recommendations = products
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-16 pt-8 border-t border-slate-200">
      <h3 className="text-xl font-bold text-slate-900 mb-6">You Might Also Like</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((product) => (
          <div
            key={product.slug}
            className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="h-36 bg-slate-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center">
                <img
                  src={product.image || product.imageUrl || '/placeholder.jpg'}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">{product.title}</h4>
              <p className="text-xs text-amber-500 font-semibold mb-3">★ {product.rating || 5.0} / 5.0</p>
            </div>
            <Link
              href={`/review/${product.slug}`}
              className="text-xs font-semibold text-center block bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-lg transition-colors"
            >
              Read Review
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}