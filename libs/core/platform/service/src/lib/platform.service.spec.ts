import { PlatformService } from './platform.service';

/**
 * @see https://github.com/angular/angular/blob/master/packages/common/src/platform_id.ts
 */
describe('PlatformService', () => {
  const PLATFORM_BROWSER_ID = 'browser';
  const PLATFORM_SERVER_ID = 'server';
  const PLATFORM_WORKER_APP_ID = 'browserWorkerApp';
  const PLATFORM_WORKER_UI_ID = 'browserWorkerUi';

  it('should be browser', () => {
    const service = new PlatformService(PLATFORM_BROWSER_ID);

    expect(service.isBrowser).toBeTruthy();
  });

  it('should be server', () => {
    const service = new PlatformService(PLATFORM_SERVER_ID);

    expect(service.isServer).toBeTruthy();
  });

  it('should be workerApp', () => {
    const service = new PlatformService(PLATFORM_WORKER_APP_ID);

    expect(service.isWorkerApp).toBeTruthy();
  });

  it('should be workerUi', () => {
    const service = new PlatformService(PLATFORM_WORKER_UI_ID);

    expect(service.isWorkerUi).toBeTruthy();
  });
});
