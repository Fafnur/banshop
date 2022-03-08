import { instance, mock } from 'ts-mockito';

import { NavigationService } from '@banshop/core/navigation/service';

import { ProductPathPipe } from './product-path.pipe';

/**
 * TODO: Add tests
 */
describe('ProductLinkPipe', () => {
  let pipe: ProductPathPipe;
  let navigationServiceMock: NavigationService;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);

    pipe = new ProductPathPipe(instance(navigationServiceMock));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
