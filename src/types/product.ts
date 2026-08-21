export interface Product {
  id?: string;
  slug: string;
  title: string;
  description?: string;
  price: string | number;
  rating?: number;
  image?: string;
  imageUrl?: string;
  category?: 'headphones' | 'earbuds' | 'speakers' | 'accessories';
  specs?: {
    batteryLife?: string;
    noiseCancellation?: string;
    weight?: string;
    connectivity?: string;
  };
}