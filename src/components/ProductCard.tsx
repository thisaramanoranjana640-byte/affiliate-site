"use client";

import { Product } from "@/data/products";
import { trackAffiliateClick } from "@/lib/gtag";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleClick = () => {
    trackAffiliateClick(product.title, product.affiliateUrl);
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
          {product.category}
        </span>
        <h3 className="text-lg font-bold mt-2 text-slate-800">{product.title}</h3>
        <p className="text-sm text-slate-600 mt-2">{product.description}</p>
      </div>

      <div className="mt-6 border-t pt-4 flex items-center justify-between">
        <span className="text-xl font-bold text-slate-900">${product.price}</span>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition"
        >
          Check Price
        </a>
      </div>
    </div>
  );
}