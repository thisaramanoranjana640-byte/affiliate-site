import Link from 'next/link';
import { products } from '@/data/products';

export default function NotFound() {
  const topProducts = products.slice(0, 3);

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-center">
      {/* Visual Error Code */}
      <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
        Error 404
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-600 max-w-md mx-auto mb-8 text-sm leading-relaxed">
        The review or guide you are looking for may have moved or no longer exists. Check out our most popular tech reviews below.
      </p>

      {/* Primary Action */}
      <div className="mb-12">
        <Link
          href="/"
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-6 rounded-lg transition-colors inline-block text-sm"
        >
          Return to Homepage
        </Link>
      </div>

      {/* Suggested Top Reviews */}
      <div className="text-left border-t border-slate-200 pt-10">
        <h2 className="text-lg font-bold text-slate-900 mb-6 text-center">
          Popular Reviews & Buying Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topProducts.map((p) => (
            <Link
              key={p.slug}
              href={`/review/${p.slug}`}
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:shadow-md transition group"
            >
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors mb-1">
                {p.title}
              </h3>
              <p className="text-xs text-amber-500 font-semibold mb-2">
                ★ {p.rating || 5.0} / 5.0
              </p>
              <span className="text-xs text-slate-500 underline">Read review →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}