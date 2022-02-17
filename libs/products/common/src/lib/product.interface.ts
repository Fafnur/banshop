import { makeStateKey } from '@angular/platform-browser';

export enum ProductKeys {
  Products = 'products',
}

export const PRODUCTS_META = makeStateKey('products');

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
