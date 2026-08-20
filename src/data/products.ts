export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  rating: number;
  description: string;
  price: string;
  affiliateUrl: string;
  badge?: string;
  pros: string[];
  cons: string[];
  verdict: string;
}

export const FeaturedProducts: Product[] = [
  {
    id: "1",
    slug: "noise-cancelling-headphones",
    title: "Noise-Cancelling Wireless Headphones",
    category: "Audio",
    rating: 4.8,
    description: "Industry-leading active noise cancellation with up to 30 hours of battery life.",
    price: "$299.99",
    affiliateUrl: "https://example.com/affiliate-1",
    badge: "Editor's Choice",
    pros: ["Exceptional noise cancellation", "30-hour battery life", "Lightweight design"],
    cons: ["Carrying case is bulky", "Premium price tag"],
    verdict: "The absolute best choice for travelers and remote workers who need distraction-free sound."
  },
  {
    id: "2",
    slug: "mechanical-keyboard",
    title: "Ergonomic Mechanical Keyboard",
    category: "Peripherals",
    rating: 4.7,
    description: "Customizable hot-swappable switches and wireless connectivity for peak productivity.",
    price: "$149.99",
    affiliateUrl: "https://example.com/affiliate-2",
    badge: "Best Value",
    pros: ["Hot-swappable switches", "Tri-mode connection (BT/2.4G/USB-C)", "Solid build"],
    cons: ["No wrist rest included", "Software takes time to setup"],
    verdict: "Great value for programmers and writers looking for a responsive typing experience."
  },
  {
    id: "3",
    slug: "ultrawide-monitor",
    title: "Ultra-Wide 4K Monitor",
    category: "Displays",
    rating: 4.9,
    description: "Stunning color accuracy and high refresh rate perfect for content creators.",
    price: "$499.99",
    affiliateUrl: "https://example.com/affiliate-3",
    badge: "Top Rated",
    pros: ["99% DCI-P3 color accuracy", "Sleek metallic stand", "HDR support"],
    cons: ["High power consumption", "Requires large desk space"],
    verdict: "A top-tier monitor choice for video editors, designers, and multitaskers."
  }
];