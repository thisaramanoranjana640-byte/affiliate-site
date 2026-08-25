import Link from 'next/link';

interface FeaturedGuide {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  useCase: string;
  shortBenefit: string;
  updatedDate: string;
  readTime: string;
  imageUrl: string;
  link: string;
}

const featuredGuides: FeaturedGuide[] = [
  {
    id: 'best-overall-headphones',
    badge: 'Best Overall',
    badgeColor: 'bg-amber-400 text-slate-950',
    title: 'Best Noise-Canceling Headphones for Remote Work',
    useCase: 'For Office & Travel (2026)',
    shortBenefit: 'Unrivaled active noise cancellation with 30-hour battery life and multi-device bluetooth switching.',
    updatedDate: 'August 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    link: '/guides/best-headphones',
  },
  {
    id: 'best-budget-headphones',
    badge: 'Best Budget Pick',
    badgeColor: 'bg-emerald-500 text-white',
    title: 'Best Wireless Headphones Under $100',
    useCase: 'High-Value Performance',
    shortBenefit: 'Deep bass, foldability, and 40-hour playtime without breaking the bank.',
    updatedDate: 'August 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
    link: '/guides/best-headphones',
  },
  {
    id: 'best-ergonomic-chairs',
    badge: 'Best Ergonomic Pick',
    badgeColor: 'bg-sky-500 text-white',
    title: 'Best Ergonomic Office Chairs for Back Pain',
    useCase: 'All-Day Sitting Comfort',
    shortBenefit: 'Adjustable dynamic lumbar support and breathable mesh design to prevent lower back strain.',
    updatedDate: 'July 2026',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?auto=format&fit=crop&w=800&q=80',
    link: '/#best-picks',
  },
];

export default function FeaturedGuides() {
  return (
    <section id="featured-guides" className="py-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Curated Recommendations
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Featured Buying Guides
          </h2>
        </div>
        <p className="text-slate-500 text-sm mt-2 md:mt-0 max-w-xs">
          Hand-picked recommendations tailored by price range and specific use cases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredGuides.map((guide) => (
          <div
            key={guide.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Guide Image Banner */}
            <div className="relative h-48 bg-slate-100 overflow-hidden">
              <img
                src={guide.imageUrl}
                alt={guide.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span
                className={`absolute top-4 left-4 ${guide.badgeColor} font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md`}
              >
                {guide.badge}
              </span>
            </div>

            {/* Guide Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                {/* Meta info: Updated date & read time */}
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mb-2">
                  <span>📅 Updated {guide.updatedDate}</span>
                  <span>•</span>
                  <span>⏱️ {guide.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                  {guide.title}
                </h3>

                <p className="text-xs font-semibold text-slate-400 mt-1 mb-3">
                  {guide.useCase}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {guide.shortBenefit}
                </p>
              </div>

              {/* Call to Action Button */}
              <Link
                href={guide.link}
                className="block text-center bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-white font-extrabold text-xs py-3 rounded-xl transition-all duration-200 shadow-sm"
              >
                Read Guide →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}