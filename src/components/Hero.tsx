import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-16 md:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>★</span> Independent & Unbiased
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Honest reviews and buying guides for <span className="text-amber-400">home-office gear.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We test noise-canceling headphones, ergonomic setups, and productivity tools so you can make confident, value-driven buying decisions.
            </p>

            <div className="pt-2">
              <Link
                href="#best-picks"
                className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-amber-400/10 transition-all transform hover:-translate-y-0.5"
              >
                Explore Best Picks →
              </Link>
            </div>
          </div>

          {/* Right Column: High-Quality Workspace Lifestyle Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-800 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80"
                alt="Modern minimalist home office setup with noise-canceling headphones and desk gear"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}