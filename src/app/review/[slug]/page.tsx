import ProductJsonLd from '@/components/ProductJsonLd';
import AffiliateButton from '@/components/AffiliateButton';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const formattedTitle = slug.replace(/-/g, ' ');

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <ProductJsonLd
        name={formattedTitle.toUpperCase()}
        image={`https://yourdomain.com/images/${slug}.jpg`}
        description={`In-depth review and buying guide for ${formattedTitle}.`}
        ratingValue={4.8}
        reviewCount={124}
        price="398.00"
        priceCurrency="USD"
      />

      <h1 className="text-3xl font-bold capitalize mb-4">
        {formattedTitle} Review
      </h1>

      <p className="mb-6 text-gray-700">
        In-depth review and detailed breakdown of features, performance, and value.
      </p>

      <AffiliateButton slug={slug} label="Check Price on Amazon" />
    </main>
  );
}