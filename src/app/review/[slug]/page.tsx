import Link from "next/link";
import { notFound } from "next/navigation";
import { FeaturedProducts } from "@/data/products";

interface ReviewPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const product = FeaturedProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-indigo-600 font-medium hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="w-full md:w-1/2 h-64 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 font-medium">
              Product Image Placeholder
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                {product.category}
              </span>
              <h1 className="text-3xl font-extrabold mt-2 mb-2">{product.title}</h1>
              <div className="text-amber-500 font-bold mb-4">★ {product.rating} / 5.0 Rating</div>
              <p className="text-slate-600 mb-6">{product.description}</p>
              <div className="text-3xl font-black mb-6">{product.price}</div>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition"
              >
                Check Current Price on Amazon
              </a>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 pt-8 border-t">
            <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
              <h2 className="text-lg font-bold text-emerald-800 mb-3">Pros</h2>
              <ul className="space-y-2">
                {product.pros.map((pro, index) => (
                  <li key={index} className="text-sm text-emerald-900 flex items-center gap-2">
                    <span className="font-bold">✓</span> {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-50/50 p-5 rounded-xl border border-rose-100">
              <h2 className="text-lg font-bold text-rose-800 mb-3">Cons</h2>
              <ul className="space-y-2">
                {product.cons.map((con, index) => (
                  <li key={index} className="text-sm text-rose-900 flex items-center gap-2">
                    <span className="font-bold">✕</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final Verdict */}
          <div className="bg-slate-100 p-6 rounded-xl mt-8">
            <h2 className="text-xl font-bold mb-2">Our Verdict</h2>
            <p className="text-slate-700 leading-relaxed">{product.verdict}</p>
          </div>
        </div>
      </div>
    </main>
  );
}