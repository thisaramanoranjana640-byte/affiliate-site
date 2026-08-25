export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  price?: number;
  rating?: number;
  image?: string;
  imageUrl?: string;
  category?: string;
  brand?: string; // Add optional brand property
  affiliateUrl?: string;
  specs?: Record<string, string>;
  pros?: string[];
  cons?: string[];
}