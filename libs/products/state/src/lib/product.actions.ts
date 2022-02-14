import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { Product } from '@banshop/products/common';

export const init = createAction('[Product] Init');

export const restore = createAction('[Product] Restore', props<{ products: Product[] }>());

export const load = createAction('[Product] Load');

export const loadSuccess = createAction('[Product] Load Success', props<{ products: Product[] }>());

export const loadFailure = createAction('[Product] Load Failure', props<{ error: HttpErrorResponse }>());
