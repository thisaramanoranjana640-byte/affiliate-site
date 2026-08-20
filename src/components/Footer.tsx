import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-xl font-bold text-white mb-4 block">TopPicks</span>
          <p className="text-sm leading-relaxed">
            Providing honest, research-backed product reviews and buying guides to help you make informed purchasing decisions.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="#featured" className="hover:text-white transition">Featured Gear</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal & Disclaimers</h4>
          <p className="text-xs leading-relaxed">
            All product names, logos, and brands are property of their respective owners. Product prices and availability are accurate as of the date/time indicated and are subject to change.
          </p>
          <p className="text-xs mt-4">
            &copy; {new Date().getFullYear()} TopPicks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}