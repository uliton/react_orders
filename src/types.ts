export interface User {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  orderId: number;
}

export interface Order {
  id: number;
  title: string;
  userId: number;
}

export interface FullOrder extends Order {
  user?: User;
  products: Product[];
}
