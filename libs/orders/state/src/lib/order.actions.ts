import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { Nullable } from '@banshop/core/utils/types';
import { Customer, OrderCreate, OrderDetails } from '@banshop/orders/common';

export const init = createAction('[Order] Init');

export const restore = createAction('[Order] Restore', props<{ customer: Nullable<Customer> | null }>());

export const createOrder = createAction('[Order] Create Order', props<{ order: OrderCreate }>());

export const createOrderSuccess = createAction('[Order] Load Order Success', props<{ orderDetails: OrderDetails }>());

export const createOrderFailure = createAction('[Order] Load Order Failure', props<{ error: HttpErrorResponse }>());

export const updateCustomer = createAction('[Order] Update Customer', props<{ customer: Nullable<Customer> }>());
