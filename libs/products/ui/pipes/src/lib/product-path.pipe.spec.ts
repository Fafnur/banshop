import { deepEqual, instance, mock, when } from 'ts-mockito';

import { NAVIGATION_PATHS } from '@banshop/core/navigation/common';
import { NavigationService } from '@banshop/core/navigation/service';
import { PRODUCT_STUB } from '@banshop/products/common';

import { ProductPathPipe } from './product-path.pipe';

describe('ProductPathPipe', () => {
  let pipe: ProductPathPipe;
  let navigationServiceMock: NavigationService;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);

    pipe = new ProductPathPipe(instance(navigationServiceMock));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return path', () => {
    when(
      navigationServiceMock.getRoute(
        NAVIGATION_PATHS.product,
        deepEqual({
          slug: PRODUCT_STUB.slug,
        })
      )
    ).thenReturn(['/', 'product', PRODUCT_STUB.slug]);

    expect(pipe.transform(PRODUCT_STUB)).toBe(`/product/${PRODUCT_STUB.slug}`);
  });
});
