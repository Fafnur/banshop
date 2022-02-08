export enum ProductKeys {
  Products = 'products',
}

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  sizes: number[];
  description: string;
  photos: string[];
}

export interface ProductsResponse {
  range: string;
  majorDimension: string;
  values: [string, string, string, string, string, string][];
}
