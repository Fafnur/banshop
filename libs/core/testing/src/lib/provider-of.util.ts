import { FactoryProvider, Type } from '@angular/core';
import { instance } from 'ts-mockito';

export function providerOf<T>(
  token:
    | Type<T>
    // eslint-disable-next-line @typescript-eslint/ban-types
    | (Function & {
        prototype: T;
      }),
  mockClass: T
): FactoryProvider {
  return {
    provide: token,
    useFactory: (): T => instance(mockClass),
  };
}
