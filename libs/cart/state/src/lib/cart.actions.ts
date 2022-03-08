import { createAction, props } from '@ngrx/store';

import { CartProduct } from '@banshop/cart/common';

export const init = createAction('[Cart] Init');

export const restore = createAction('[Cart] Restore', props<{ cartProducts: CartProduct[] }>());

export const clear = createAction('[Cart] Clear');

export const addProduct = createAction('[Cart] Add Product', props<{ cartProduct: CartProduct }>());

export const addProductSuccess = createAction('[Cart] Add Product Success', props<{ cartProduct: CartProduct }>());

export const addProductFailure = createAction('[Cart] Add Product Failure', props<{ error: string; cartProduct: CartProduct }>());

export const removeProduct = createAction('[Cart] Remove Product', props<{ cartProduct: CartProduct }>());

export const removeProductSuccess = createAction('[Cart] Remove Product Success', props<{ cartProduct: CartProduct }>());

export const removeProductFailure = createAction('[Cart] Remove Product Failure', props<{ error: string; cartProduct: CartProduct }>());

export const changeProduct = createAction('[Cart] Change Product', props<{ cartProduct: CartProduct }>());

export const changeProductSuccess = createAction('[Cart] Change Product Success', props<{ cartProduct: CartProduct }>());

export const changeProductFailure = createAction('[Cart] Change Product Failure', props<{ error: string; cartProduct: CartProduct }>());
