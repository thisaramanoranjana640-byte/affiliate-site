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
  specs?: {
    batteryLife?: string;
    noiseCancellation?: string;
    weight?: string;
    connectivity?: string;
  };
}