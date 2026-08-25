import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Grid: Brand & Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-slate-950 font-black text-lg">
                T
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                TechPulse
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Honest, independent reviews and comprehensive buying guides for tech and home-office gear.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#best-picks" className="hover:text-amber-400 transition-colors">
                  Best Picks
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-amber-400 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/guides/best-headphones" className="hover:text-amber-400 transition-colors">
                  Buying Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Info */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Policies */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3">Legal & Transparency</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-amber-400 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclosures Section */}
        <div className="space-y-4 mb-8 text-slate-400 text-[11px] leading-relaxed max-w-4xl">
          <div>
            <span className="font-bold text-slate-300">Affiliate Disclosure: </span>
            TechPulse is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no additional cost to you. This helps fund our independent testing process.
          </div>

          <div>
            <span className="font-bold text-slate-300">Amazon Associate Disclosure: </span>
            As an Amazon Associate, TechPulse earns from qualifying purchases. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {currentYear} TechPulse. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-300">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms</Link>
            <Link href="/affiliate-disclosure" className="hover:text-slate-300">Disclosure</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}