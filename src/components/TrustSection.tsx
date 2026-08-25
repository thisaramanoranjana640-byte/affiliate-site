export default function TrustSection() {
  return (
    <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 border border-slate-800 my-8">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          Editorial Standards & Disclosure
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Why Trust TechPulse?
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          We believe in honest, independent testing so you can upgrade your workspace with confidence. Here is how we evaluate products and maintain transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1: Research & Hands-On Testing */}
        <div className="bg-slate-800/60 border border-slate-700/60 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-amber-400/20 text-amber-400 rounded-xl flex items-center justify-center font-bold text-lg mb-4">
              🧪
            </div>
            <h3 className="font-bold text-base text-white mb-2">
              Hands-On Testing
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We evaluate noise cancellation, battery life, build quality, and ergonomics in real everyday home-office environments—not just lab specs.
            </p>
          </div>
        </div>

        {/* Step 2: Selection Criteria */}
        <div className="bg-slate-800/60 border border-slate-700/60 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-amber-400/20 text-amber-400 rounded-xl flex items-center justify-center font-bold text-lg mb-4">
              🎯
            </div>
            <h3 className="font-bold text-base text-white mb-2">
              Unbiased Selection
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Products are selected based on real utility, build performance, and price-to-value ratio. Brands cannot pay for top spots or favorable review scores.
            </p>
          </div>
        </div>

        {/* Step 3: Affiliate Transparency */}
        <div className="bg-slate-800/60 border border-slate-700/60 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-amber-400/20 text-amber-400 rounded-xl flex items-center justify-center font-bold text-lg mb-4">
              🤝
            </div>
            <h3 className="font-bold text-base text-white mb-2">
              Affiliate Disclosure
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              When you buy through links on our site, we may earn an affiliate commission <span className="text-amber-400 font-semibold">at no extra cost to you</span>. This directly funds our independent testing setup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}