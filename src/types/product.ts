export interface Product {
  id?: string;
  slug: string;
  title: string;
  description?: string;
  price: string | number;
  image?: string;
  imageUrl?: string;
  rating?: number;
  affiliateUrl?: string;
}