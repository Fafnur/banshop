import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';

import { Chat, ChatKeys } from '@banshop/chat/common';
import { LocalAsyncStorage } from '@banshop/core/storage/local';

import * as ChatActions from './chat.actions';
import * as ChatSelectors from './chat.selectors';

@Injectable()
export class ChatEffects implements OnInitEffects {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChatActions.init),
      concatLatestFrom(() => this.localAsyncStorage.getItem<Chat | null>(ChatKeys.Chat)),
      fetch({
        run: (action, chat) => ChatActions.restore({ chat }),
      })
    );
  });

  createMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChatActions.createMessage),
      concatLatestFrom(() => this.store.select(ChatSelectors.selectChatMessages)),
      fetch({
        run: (action, chatMessages) =>
          ChatActions.createMessageSuccess({
            // Fake create message. It's for demo.
            chatMessage: {
              id: chatMessages.length > 0 ? chatMessages[chatMessages.length - 1].id + 1 : 1,
              message: action.chatMessageCreate.message,
              created: new Date().toISOString(),
              isOwner: true,
            },
          }),
        onError: (action, error) => ChatActions.createMessageFailure({ error }),
      })
    );
  });

  constructor(private readonly actions$: Actions, private readonly store: Store, private readonly localAsyncStorage: LocalAsyncStorage) {}

  ngrxOnInitEffects(): Action {
    return ChatActions.init();
  }
}
