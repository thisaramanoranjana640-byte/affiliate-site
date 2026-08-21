'use client';

import { Product } from '@/types/product';
import AffiliateButton from '@/components/AffiliateButton';

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className="my-8 overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-4 font-bold text-gray-900 min-w-[150px]">Feature</th>
            {products.map((p) => (
              <th key={p.slug} className="p-4 font-bold text-gray-900 text-center min-w-[200px]">
                {p.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {/* Price Row */}
          <tr>
            <td className="p-4 font-semibold text-gray-700">Price</td>
            {products.map((p) => (
              <td key={p.slug} className="p-4 text-center font-extrabold text-amber-600 text-base">
                {typeof p.price === 'number' ? `$${p.price}` : p.price}
              </td>
            ))}
          </tr>

          {/* Rating Row */}
          <tr>
            <td className="p-4 font-semibold text-gray-700">Rating</td>
            {products.map((p) => (
              <td key={p.slug} className="p-4 text-center font-bold text-amber-500">
                ★ {p.rating || 5.0} / 5.0
              </td>
            ))}
          </tr>

          {/* Battery Life */}
          <tr>
            <td className="p-4 font-semibold text-gray-700">Battery Life</td>
            {products.map((p) => (
              <td key={p.slug} className="p-4 text-center text-gray-600">
                {p.specs?.batteryLife || 'N/A'}
              </td>
            ))}
          </tr>

          {/* Active Noise Cancellation */}
          <tr>
            <td className="p-4 font-semibold text-gray-700">ANC</td>
            {products.map((p) => (
              <td key={p.slug} className="p-4 text-center text-gray-600">
                {p.specs?.noiseCancellation || 'N/A'}
              </td>
            ))}
          </tr>

          {/* Weight */}
          <tr>
            <td className="p-4 font-semibold text-gray-700">Weight</td>
            {products.map((p) => (
              <td key={p.slug} className="p-4 text-center text-gray-600">
                {p.specs?.weight || 'N/A'}
              </td>
            ))}
          </tr>

          {/* Buy Action Buttons */}
          <tr className="bg-gray-50">
            <td className="p-4 font-semibold text-gray-700">Action</td>
            {products.map((p) => (
              <td key={p.slug} className="p-4 text-center">
                <AffiliateButton
                  slug={p.slug}
                  label="Buy Now"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded text-xs inline-block transition-colors"
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}