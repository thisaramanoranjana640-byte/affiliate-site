import Link from 'next/link';
import { Product } from '@/types/product';
import AffiliateButton from '@/components/AffiliateButton';

interface LatestReviewsProps {
  products: Product[];
}

export default function LatestReviews({ products }: LatestReviewsProps) {
  // Display top products as hands-on reviews
  const reviewProducts = products.slice(0, 4);

  return (
    <section id="latest-reviews" className="py-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Single Product Testing
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Latest Hands-On Reviews
          </h2>
        </div>
        <p className="text-slate-500 text-sm mt-2 md:mt-0 max-w-xs">
          Deep-dive individual evaluations based on real office testing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {reviewProducts.map((product) => (
          <div
            key={product.slug}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row gap-6 items-start justify-between"
          >
            {/* Product Thumbnail */}
            <div className="w-full sm:w-44 h-44 bg-slate-100 rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-slate-100">
              <img
                src={product.image || product.imageUrl || '/placeholder.jpg'}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Review Content */}
            <div className="flex-1 flex flex-col justify-between h-full space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {product.brand || 'Gear Review'}
                  </span>
                  <span className="bg-amber-100 text-amber-900 font-extrabold text-xs px-2.5 py-0.5 rounded-full">
                    ★ {product.rating || 5.0} / 5.0
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors leading-snug">
                  <Link href={`/review/${product.slug}`}>{product.title}</Link>
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <Link
                  href={`/review/${product.slug}`}
                  className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs py-2.5 rounded-xl transition-colors"
                >
                  Read Review
                </Link>
                <AffiliateButton
                  slug={product.slug}
                  label={`$${product.price || '---'}`}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-xs py-2.5 px-4 rounded-xl transition-colors"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}