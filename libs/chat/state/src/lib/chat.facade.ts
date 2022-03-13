import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { map } from 'rxjs';

import * as ChatActions from './chat.actions';
import * as ChatSelectors from './chat.selectors';

@Injectable()
export class ChatFacade {
  loaded$ = this.store.select(ChatSelectors.selectLoaded);

  messages$ = this.store.select(ChatSelectors.selectChatMessages);

  createMessageSuccess$ = this.actions$.pipe(
    ofType(ChatActions.createMessageSuccess),
    map(({ chatMessage }) => chatMessage)
  );

  createMessageFailure$ = this.actions$.pipe(
    ofType(ChatActions.createMessageFailure),
    map(({ error }) => error)
  );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  addMessage(message: string): void {
    this.dispatch(ChatActions.createMessage({ chatMessageCreate: { message } }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
