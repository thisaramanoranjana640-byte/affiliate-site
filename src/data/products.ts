import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    slug: 'sony-wh1000xm5',
    title: 'Sony WH-1000XM5',
    description: 'Industry leading noise canceling headphones.',
    price: '$398.00',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
  },
  {
    id: '2',
    slug: 'airpods-pro-2',
    title: 'Apple AirPods Pro 2',
    description: 'Active noise cancellation with transparency mode.',
    price: '$249.00',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800',
  },
  {
    id: '3',
    slug: 'bose-qc45',
    title: 'Bose QuietComfort 45',
    description: 'Iconic quietness, comfort, and sound.',
    price: '$329.00',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800',
  },
];