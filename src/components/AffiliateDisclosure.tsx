'use client';

import { useState, useEffect } from 'react';

export default function AffiliateDisclosure() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('affiliate_disclosure_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('affiliate_disclosure_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <p className="leading-relaxed">
          <strong className="text-amber-400 font-semibold">Affiliate Disclosure:</strong>{' '}
          As an Amazon Associate and affiliate partner, we may earn a commission from qualifying purchases made through links on this site at no extra cost to you.
        </p>
        <button
          onClick={handleDismiss}
          className="text-slate-400 hover:text-white transition-colors underline whitespace-nowrap text-[11px]"
          aria-label="Dismiss disclosure notice"
        >
          Got it
        </button>
      </div>
    </div>
  );
}