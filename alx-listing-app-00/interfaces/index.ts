// interfaces/index.ts

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[]; // tags such as ["Luxury Villa", "Pool"]
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
}

