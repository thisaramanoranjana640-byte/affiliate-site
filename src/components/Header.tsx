'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirects to home with search query param
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo + Niche Name */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center text-slate-950 font-black text-xl shadow-md">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-white leading-tight tracking-tight">
                TechPulse
              </span>
              <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-widest">
                Gear & Tech Reviews
              </span>
            </div>
          </Link>

          {/* Search Bar (Desktop) */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reviews, guides, products..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2 pl-4 pr-10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-400 transition-colors text-sm"
                aria-label="Search"
              >
                🔍
              </button>
            </div>
          </form>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link href="/#categories" className="hover:text-amber-400 transition-colors">
              Categories
            </Link>
            <Link href="/#best-picks" className="hover:text-amber-400 transition-colors">
              Best Picks
            </Link>
            <Link href="/#reviews" className="hover:text-amber-400 transition-colors">
              Reviews
            </Link>
            <Link href="/guides/best-headphones" className="hover:text-amber-400 transition-colors">
              Guides
            </Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors">
              About
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-white p-2 text-xl"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Search Bar (Mobile Dropdown) */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reviews & guides..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2 pl-4 pr-10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"
            >
              🔍
            </button>
          </form>
        </div>

        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden border-t border-slate-800 py-4 flex flex-col gap-3 text-sm font-semibold text-slate-300">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">
              Home
            </Link>
            <Link href="/#categories" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">
              Categories
            </Link>
            <Link href="/#best-picks" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">
              Best Picks
            </Link>
            <Link href="/#reviews" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">
              Reviews
            </Link>
            <Link href="/guides/best-headphones" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">
              Guides
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}