import { MetadataRoute } from 'next';
import { products } from '@/data/products';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Update this to your deployed domain on Vercel or your custom domain
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://affiliate-site.vercel.app';

  // Static site routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/guides/best-headphones`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamic routes for all individual product review pages
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/review/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}