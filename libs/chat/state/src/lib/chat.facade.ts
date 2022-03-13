import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

import * as ChatActions from './chat.actions';
import * as ChatSelectors from './chat.selectors';

@Injectable()
export class ChatFacade {
  loaded$ = this.store.select(ChatSelectors.selectLoaded);

  messages$ = this.store.select(ChatSelectors.selectChatMessages);

  constructor(private readonly store: Store) {}

  addMessage(message: string): void {
    this.dispatch(ChatActions.createMessage({ chatMessageCreate: { message } }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
