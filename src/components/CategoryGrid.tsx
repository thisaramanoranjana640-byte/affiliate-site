import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
  itemCount: string;
  gradient: string;
}

const categories: Category[] = [
  {
    id: 'headphones',
    name: 'Headphones',
    description: 'ANC, wireless & studio headphones',
    icon: '🎧',
    link: '/guides/best-headphones',
    itemCount: '12 Guides',
    gradient: 'from-blue-600 to-indigo-900',
  },
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'Ultrabooks, MacBooks & gaming rigs',
    icon: '💻',
    link: '/#best-picks',
    itemCount: '15 Reviews',
    gradient: 'from-slate-800 to-slate-950',
  },
  {
    id: 'office-chairs',
    name: 'Office Chairs',
    description: 'Ergonomic lumbar support & mesh seating',
    icon: '🪑',
    link: '/#best-picks',
    itemCount: '8 Reviews',
    gradient: 'from-amber-600 to-amber-900',
  },
  {
    id: 'monitors',
    name: '4K Monitors',
    description: 'Ultrawide, color-accurate & high refresh',
    icon: '🖥️',
    link: '/#best-picks',
    itemCount: '10 Reviews',
    gradient: 'from-emerald-700 to-slate-900',
  },
  {
    id: 'desk-setup',
    name: 'Smart Desk Gear',
    description: 'Standing desks, lightbars & docks',
    icon: '⚡',
    link: '/#best-picks',
    itemCount: '14 Reviews',
    gradient: 'from-purple-700 to-indigo-950',
  },
  {
    id: 'audio-accessories',
    name: 'Microphones & Audio',
    description: 'USB mics, interfaces & desk speakers',
    icon: '🎙️',
    link: '/#best-picks',
    itemCount: '9 Reviews',
    gradient: 'from-rose-700 to-slate-950',
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Explore By Category
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Popular Categories
          </h2>
        </div>
        <p className="text-slate-500 text-sm mt-2 md:mt-0 max-w-xs">
          Browse specialized buying guides and hands-on reviews curated by gear category.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={cat.link}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Background Accent Gradient on Hover */}
            <div
              className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cat.gradient}`}
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl p-2 bg-slate-100 rounded-xl group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {cat.itemCount}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                {cat.description}
              </p>
            </div>

            <div className="flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
              <span>View Guides</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}