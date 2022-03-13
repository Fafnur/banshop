import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as ChatActions from './chat.actions';
import * as ChatFeature from './chat.reducer';
import * as ChatSelectors from './chat.selectors';

@Injectable()
export class ChatFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ChatSelectors.selectLoaded));
  allChat$ = this.store.pipe(select(ChatSelectors.selectChatMessages));
  selectedChat$ = this.store.pipe(select(ChatSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ChatActions.init());
  }
}
