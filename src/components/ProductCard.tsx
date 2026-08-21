'use client';

import Link from 'next/link';
import { trackAffiliateClick } from '@/lib/gtag';

interface ProductCardProps {
  slug: string;
  title: string;
  price: string;
  rating: number;
  image: string;
}

export default function ProductCard({
  slug,
  title,
  price,
  rating,
  image,
}: ProductCardProps) {
  const handleClick = () => {
    trackAffiliateClick(slug);
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between">
      <div>
        <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-amber-500 font-bold">★ {rating}</span>
          <span className="text-gray-500 text-sm">/ 5.0</span>
        </div>
        <p className="text-2xl font-black text-gray-900 mb-4">{price}</p>
      </div>

      <div className="space-y-2">
        <a
          href={`/go/${slug}`}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          onClick={handleClick}
          className="w-full block text-center bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded-lg transition-colors"
        >
          Buy Now
        </a>
        <Link
          href={`/review/${slug}`}
          className="w-full block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
        >
          Read Full Review
        </Link>
      </div>
    </div>
  );
}