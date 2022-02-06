import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { ApiService } from '@banshop/core/api/service';
import { EnvironmentService } from '@banshop/core/environments/service';
import { Product, ProductsResponse } from '@banshop/products/common';

export const PRODUCT_API_ROUTES = {
  load: (payload: { id: string; name: string; key: string }) =>
    `https://sheets.googleapis.com/v4/spreadsheets/${payload.id}/values/${payload.name}?key=${payload.key}`,
};

@Injectable()
export class ProductApiService {
  constructor(private readonly apiService: ApiService, private readonly environmentService: EnvironmentService) {}

  load(): Observable<Product[]> {
    if (!this.environmentService.environments.google) {
      console.warn('Google Sheet was not loaded. Check your envs.');

      return of([]);
    }

    return this.apiService.get<ProductsResponse>(PRODUCT_API_ROUTES.load(this.environmentService.environments.google)).pipe(
      map((response: ProductsResponse) => {
        return response.values.map(
          ([title, subtitle, price, sizes, description, photos]: [string, string, string, string, string, string]) => ({
            title: title.trim(),
            subtitle: subtitle.trim(),
            price: Number(price.trim()),
            sizes: sizes.split('\n').map((size) => Number(size.trim())),
            description: description.trim(),
            photos: photos.split('\n').map((photo) => photo.trim()),
          })
        );
      })
    );
  }
}
