export interface Product {
  id?: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  affiliateUrl?: string;
  rating?: number;
}