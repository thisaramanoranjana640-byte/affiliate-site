interface ProductJsonLdProps {
  name: string;
  image: string;
  description: string;
  ratingValue: number;
  reviewCount: number;
  price: string;
  priceCurrency: string;
}

export default function ProductJsonLd({
  name,
  image,
  description,
  ratingValue,
  reviewCount,
  price,
  priceCurrency,
}: ProductJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image,
    description,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}