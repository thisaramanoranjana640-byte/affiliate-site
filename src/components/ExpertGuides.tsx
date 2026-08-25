import Link from 'next/link';

interface AdviceGuide {
  id: string;
  title: string;
  description: string;
  icon: string;
  readTime: string;
  category: string;
  link: string;
}

const guides: AdviceGuide[] = [
  {
    id: 'gaming-monitor',
    title: 'How to Choose a Gaming Monitor',
    description: 'Learn about refresh rate (Hz), resolution (1080p vs 4K), panel types (IPS, OLED), and optimal screen size.',
    icon: '🖥️',
    readTime: '7 min read',
    category: 'Displays',
    link: '/guides/best-headphones',
  },
  {
    id: 'laptop-ram',
    title: 'What Laptop RAM Do You Need?',
    description: 'A practical breakdown of 8GB, 16GB, 32GB, and 64GB requirements for students, general work, gaming, and 4K editing.',
    icon: '💻',
    readTime: '5 min read',
    category: 'Hardware',
    link: '/guides/best-headphones',
  },
  {
    id: 'ssd-vs-hdd',
    title: 'SSD vs HDD: Which Storage Is Right for You?',
    description: 'Compare NVMe speeds, storage capacities, cost per gigabyte, and best real-world use cases for desktop and mobile.',
    icon: '💾',
    readTime: '6 min read',
    category: 'Storage',
    link: '/guides/best-headphones',
  },
  {
    id: 'office-chair-ergonomics',
    title: 'How to Choose the Right Office Chair',
    description: 'Discover which ergonomic features actually matter—from adjustable lumbar support and seat depth to breathable mesh.',
    icon: '🪑',
    readTime: '8 min read',
    category: 'Ergonomics',
    link: '/guides/best-headphones',
  },
  {
    id: 'wireless-headphones-buying-guide',
    title: 'What to Look for Before Buying Wireless Headphones',
    description: 'Understand active noise cancellation (ANC), battery longevity, long-session comfort, and codec sound quality.',
    icon: '🎧',
    readTime: '6 min read',
    category: 'Audio',
    link: '/guides/best-headphones',
  },
];

export default function ExpertGuides() {
  return (
    <section id="expert-guides" className="py-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Expert Advice & Tips
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Buying Guides & Expert Advice
          </h2>
        </div>
        <p className="text-slate-500 text-sm mt-2 md:mt-0 max-w-xs">
          Not sure what to choose? Start with these simple, educational guides.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {guides.map((guide) => (
          <Link
            key={guide.id}
            href={guide.link}
            className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2.5 bg-slate-100 rounded-xl group-hover:scale-110 transition-transform">
                  {guide.icon}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                  ⏱️ {guide.readTime}
                </span>
              </div>

              {/* Tag */}
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 mb-1 block">
                {guide.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug mb-2">
                {guide.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                {guide.description}
              </p>
            </div>

            {/* Footer link */}
            <div className="flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors border-t border-slate-100 pt-4">
              <span>Read Full Guide</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA Button */}
      <div className="text-center">
        <Link
          href="/guides/best-headphones"
          className="inline-flex items-center justify-center bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 shadow-md"
        >
          View All Buying Guides →
        </Link>
      </div>
    </section>
  );
}