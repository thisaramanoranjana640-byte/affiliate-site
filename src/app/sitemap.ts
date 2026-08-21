import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

  const products = [
    { slug: 'best-wireless-headphones', updatedAt: new Date() },
    { slug: 'ergonomic-office-chairs', updatedAt: new Date() },
  ];

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/review/${product.slug}`,
    lastModified: product.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...productEntries,
  ];
}