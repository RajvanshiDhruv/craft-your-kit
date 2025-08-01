export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Kit {
  id: string;
  name: string;
  description: string;
  categories: string[];
  image: string;
  color: string;
}