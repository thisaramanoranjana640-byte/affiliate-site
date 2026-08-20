import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <div className="h-44 bg-slate-100 rounded-lg mb-4 flex items-center justify-center text-slate-400 font-medium">
          Image Placeholder
        </div>

        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
            {product.category}
          </span>
          {product.badge && (
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded border border-amber-200">
              {product.badge}
            </span>
          )}
        </div>

        <Link href={`/review/${product.slug}`} className="hover:text-indigo-600 transition">
          <h3 className="text-xl font-bold text-slate-900 mb-1">{product.title}</h3>
        </Link>

        <div className="text-sm text-amber-500 font-bold mb-3">
          ★ {product.rating} / 5.0
        </div>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{product.description}</p>
      </div>

      <div>
        <div className="text-2xl font-extrabold text-slate-900 mb-3">{product.price}</div>
        <div className="flex gap-2">
          <Link
            href={`/review/${product.slug}`}
            className="flex-1 text-center bg-slate-100 text-slate-800 font-semibold py-2.5 rounded-lg hover:bg-slate-200 transition text-sm"
          >
            Read Review
          </Link>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-emerald-600 text-white font-semibold py-2.5 rounded-lg hover:bg-emerald-700 transition text-sm"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}