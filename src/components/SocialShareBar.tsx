'use client';

import { useState } from 'react';

interface SocialShareBarProps {
  title: string;
}

export default function SocialShareBar({ title }: SocialShareBarProps) {
  const [copied, setCopied] = useState(false);

  // Fallback to window.location.href when mounted in client
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  };

  return (
    <div className="flex items-center gap-2 my-6 p-3 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
      <span className="text-slate-500 mr-2 uppercase tracking-wider text-[11px]">
        Share Guide:
      </span>

      {/* X / Twitter */}
      <a
        href={shareLinks.x}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-black hover:bg-slate-800 text-white rounded-lg transition-colors flex items-center gap-1.5"
      >
        <span>✕</span> X
      </a>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Facebook
      </a>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-sky-700 hover:bg-sky-800 text-white rounded-lg transition-colors"
      >
        LinkedIn
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className="px-3 py-1.5 bg-white hover:bg-slate-200 border border-slate-300 text-slate-800 rounded-lg transition-colors ml-auto"
      >
        {copied ? '✓ Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}