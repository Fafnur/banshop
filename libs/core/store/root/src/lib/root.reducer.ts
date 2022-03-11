import { Params } from '@angular/router';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface RouterReducerStateExtended<T extends Record<string, unknown> = Record<string, unknown>> {
  url: string;
  params: Params;
  queryParams: Params;
  data?: T;
}

export interface RootState {
  router: RouterReducerState<RouterReducerStateExtended> | null;
}

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
};

export const rootInitialState: RootState = {
  router: null,
};
