import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';

export interface ProductCardProps {
  item: Product;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      {item.image && (
        <div className="relative h-48 w-full mb-4">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>
      )}
      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
        {item.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-emerald-600">${item.price}</span>
        <Link
          href={`/review/${item.slug}`}
          className="bg-sky-600 text-white px-4 py-2 rounded text-sm hover:bg-sky-700 transition"
        >
          Read Review
        </Link>
      </div>
    </div>
  );
}