// types.ts
export type Thumbnail = {
  id: number;
  src: string;
  alt: string;
};

export type Product = {
  company: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  originalPrice: number;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
};