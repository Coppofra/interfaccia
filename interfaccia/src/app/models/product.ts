export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image?: string;
  images?: string[];
  short: string;
  description?: string;
  features?: string[];
}
