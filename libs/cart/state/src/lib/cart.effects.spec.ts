import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { BehaviorSubject, Observable } from 'rxjs';
import { anything, mock, verify, when } from 'ts-mockito';

import { CART_PRODUCT_STUB, CartKeys, CartProduct } from '@banshop/cart/common';
import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { providerOf } from '@banshop/core/testing';

import * as CartActions from './cart.actions';
import { CartEffects } from './cart.effects';
import { CART_FEATURE_KEY, cartAdapter, cartInitialState, CartState } from './cart.reducer';

describe('CartEffects', () => {
  let actions: Observable<Action>;
  let effects: CartEffects;
  let store: MockStore;
  let localAsyncStorageMock: LocalAsyncStorage;
  let getItem$: BehaviorSubject<CartProduct[] | null>;

  let setStore: (state?: Partial<CartState>, products?: CartProduct[]) => void;

  beforeEach(() => {
    localAsyncStorageMock = mock(LocalAsyncStorage);

    getItem$ = new BehaviorSubject<CartProduct[] | null>(null);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          CartEffects,
          provideMockActions(() => actions),
          provideMockStore({
            initialState: {
              [CART_FEATURE_KEY]: cartInitialState,
            },
          }),
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(localAsyncStorageMock.getItem(CartKeys.Cart)).thenReturn(getItem$);

    effects = TestBed.inject(CartEffects);
    store = TestBed.inject(MockStore);

    setStore = (state: Partial<CartState> = {}, products: CartProduct[] = []) =>
      store.setState({
        [CART_FEATURE_KEY]: cartAdapter.setAll(products, { ...cartInitialState, ...state }),
      });
  });

  describe('init$', () => {
    it('should work', () => {
      const action = CartActions.init();
      const completion = CartActions.restore({ cartProducts: [] });

      actions = hot('-a-|', { a: action });
      const expected = hot('-a-|', { a: completion });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('addProduct$', () => {
    it('should return addProductSuccess', () => {
      const action = CartActions.addProduct({ cartProduct: CART_PRODUCT_STUB });
      const completion = CartActions.addProductSuccess({ cartProduct: CART_PRODUCT_STUB });

      actions = hot('a|', { a: action });
      const expected = cold('a|', { a: completion });

      expect(effects.addProduct$).toBeObservable(expected);
    });

    it('should return addProductFailure', () => {
      setStore({}, [CART_PRODUCT_STUB]);

      const action = CartActions.addProduct({ cartProduct: CART_PRODUCT_STUB });
      const completion = CartActions.addProductFailure({ error: 'Duplicate CartProduct', cartProduct: CART_PRODUCT_STUB });

      actions = hot('a|', { a: action });
      const expected = cold('a|', { a: completion });

      expect(effects.addProduct$).toBeObservable(expected);
    });
  });

  describe('removeProduct$', () => {
    it('should return removeProductSuccess', () => {
      setStore({}, [CART_PRODUCT_STUB]);

      const action = CartActions.removeProduct({ cartProduct: CART_PRODUCT_STUB });
      const completion = CartActions.removeProductSuccess({ cartProduct: CART_PRODUCT_STUB });

      actions = hot('a|', { a: action });
      const expected = cold('a|', { a: completion });

      expect(effects.removeProduct$).toBeObservable(expected);
    });

    it('should return removeProductFailure', () => {
      const action = CartActions.removeProduct({ cartProduct: CART_PRODUCT_STUB });
      const completion = CartActions.removeProductFailure({ error: 'CartProduct was not found', cartProduct: CART_PRODUCT_STUB });

      actions = hot('a|', { a: action });
      const expected = cold('a|', { a: completion });

      expect(effects.removeProduct$).toBeObservable(expected);
    });
  });

  describe('changeProduct$', () => {
    it('should return changeProductSuccess', () => {
      setStore({}, [CART_PRODUCT_STUB]);

      const action = CartActions.changeProduct({ cartProduct: CART_PRODUCT_STUB });
      const completion = CartActions.changeProductSuccess({ cartProduct: CART_PRODUCT_STUB });

      actions = hot('a|', { a: action });
      const expected = cold('a|', { a: completion });

      expect(effects.changeProduct$).toBeObservable(expected);
    });

    it('should return changeProductFailure', () => {
      const action = CartActions.changeProduct({ cartProduct: CART_PRODUCT_STUB });
      const completion = CartActions.changeProductFailure({ error: 'CartProduct was not found', cartProduct: CART_PRODUCT_STUB });

      actions = hot('a|', { a: action });
      const expected = cold('a|', { a: completion });

      expect(effects.changeProduct$).toBeObservable(expected);
    });
  });

  describe('saveCartToLocalStorage$', () => {
    it('should call localAsyncStorage.setItem', () => {
      setStore({}, [CART_PRODUCT_STUB]);

      const action = CartActions.changeProductSuccess({ cartProduct: CART_PRODUCT_STUB });

      actions = hot('a|', { a: action });
      const expected = cold('-|');

      expect(effects.saveCartToLocalStorage$).toBeObservable(expected);
      verify(localAsyncStorageMock.setItem(CartKeys.Cart, anything())).once();
    });

    it('should call localAsyncStorage.setItem', () => {
      setStore({}, [CART_PRODUCT_STUB]);

      const action = CartActions.addProductSuccess({ cartProduct: CART_PRODUCT_STUB });

      actions = hot('a|', { a: action });
      const expected = cold('-|');

      expect(effects.saveCartToLocalStorage$).toBeObservable(expected);
      verify(localAsyncStorageMock.setItem(CartKeys.Cart, anything())).once();
    });

    it('should call localAsyncStorage.setItem', () => {
      setStore({}, [CART_PRODUCT_STUB]);

      const action = CartActions.removeProductSuccess({ cartProduct: CART_PRODUCT_STUB });

      actions = hot('a|', { a: action });
      const expected = cold('-|');

      expect(effects.saveCartToLocalStorage$).toBeObservable(expected);
      verify(localAsyncStorageMock.setItem(CartKeys.Cart, anything())).once();
    });
  });
});
