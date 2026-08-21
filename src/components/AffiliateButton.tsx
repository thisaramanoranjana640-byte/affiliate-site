'use client';

import { trackAffiliateClick } from '@/lib/gtag';

interface AffiliateButtonProps {
  slug: string;
  label?: string;
  className?: string;
}

export default function AffiliateButton({
  slug,
  label = 'Check Price on Amazon',
  className = 'bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg transition-colors inline-block cursor-pointer',
}: AffiliateButtonProps) {
  const handleClick = () => {
    if (slug) {
      trackAffiliateClick(slug);
    }
  };

  return (
    <a
      href={`/go/${slug}`}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {label}
    </a>
  );
}