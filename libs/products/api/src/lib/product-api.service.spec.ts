import { of } from 'rxjs';
import { instance, mock, verify, when } from 'ts-mockito';

import { ApiService } from '@banshop/core/api/service';
import { ENVIRONMENTS_DEFAULT, EnvironmentService } from '@banshop/core/environments/service';
import { PRODUCTS_RESPONSE_STUB, ProductsResponse } from '@banshop/products/common';

import { PRODUCT_API_ROUTES, ProductApiService } from './product-api.service';

describe('ProductApiService', () => {
  let service: ProductApiService;
  let apiServiceMock: ApiService;
  let environmentServiceMock: EnvironmentService;
  const GOOGLE_STUB = { key: 'key', id: 'id', name: 'name ' };

  beforeEach(() => {
    apiServiceMock = mock(ApiService);
    environmentServiceMock = mock(EnvironmentService);
    when(environmentServiceMock.environments).thenReturn({ ...ENVIRONMENTS_DEFAULT, google: GOOGLE_STUB });

    service = new ProductApiService(instance(apiServiceMock), instance(environmentServiceMock));
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call load()', () => {
    when(apiServiceMock.get<ProductsResponse>(PRODUCT_API_ROUTES.load(GOOGLE_STUB))).thenReturn(of(PRODUCTS_RESPONSE_STUB));

    service.load();

    verify(apiServiceMock.get(PRODUCT_API_ROUTES.load(GOOGLE_STUB))).once();
  });
});
