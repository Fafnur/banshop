import { makeStateKey } from '@angular/platform-browser';

export enum ProductKeys {
  Products = 'products',
}

export const PRODUCTS_META = makeStateKey<Product[]>('products');

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  sizes: number[];
  description: string;
  photos: string[];
  slug: string;
}

export interface ProductsResponse {
  range: string;
  majorDimension: string;
  values: [string, string, string, string, string, string, string][];
}

export enum ProductField {
  Size = 'size',
  Count = 'count',
}
