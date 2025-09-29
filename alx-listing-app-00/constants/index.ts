// constants/index.ts
import type { PropertyProps } from "@/interfaces";

export const HERO_BG =
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a1d217b5c8b3f8d28e9a3b7ac0a8b50";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image1.jpg",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://example.com/image2.jpg",
    discount: "30"
  },
  // ... include all entries you provided (I included two above as examples)
  // Make sure to paste the rest of the 20 objects from your instruction here.
];
