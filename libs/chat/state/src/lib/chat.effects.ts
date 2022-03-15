import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { take } from 'rxjs';

import { ChatKeys, ChatMessage } from '@banshop/chat/common';
import { LocalAsyncStorage } from '@banshop/core/storage/local';

import * as ChatActions from './chat.actions';
import * as ChatSelectors from './chat.selectors';

@Injectable()
export class ChatEffects implements OnInitEffects {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChatActions.init),
      concatLatestFrom(() => this.localAsyncStorage.getItem<ChatMessage[] | null>(ChatKeys.ChatMessages).pipe(take(1))),
      fetch({
        run: (action, chatMessages) => ChatActions.restore({ chatMessages }),
      })
    );
  });

  restore$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChatActions.restore),
      fetch({
        run: ({ chatMessages }) =>
          !chatMessages?.length
            ? ChatActions.createMessage({ chatMessageCreate: { message: 'Здравствуйте. Какой у вас вопрос?', isOwner: false } })
            : undefined,
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
              created: new Date().toISOString(),
              isOwner: action.chatMessageCreate.isOwner ?? true,
              message: action.chatMessageCreate.message,
            },
          }),
        onError: (action, error) => ChatActions.createMessageFailure({ error }),
      })
    );
  });

  createMessageSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChatActions.createMessageSuccess),
      concatLatestFrom(() => this.store.select(ChatSelectors.selectChatMessages)),
      fetch({
        run: (action, chatMessages) => this.localAsyncStorage.setItem(ChatKeys.ChatMessages, chatMessages),
      })
    );
  });

  constructor(private readonly actions$: Actions, private readonly store: Store, private readonly localAsyncStorage: LocalAsyncStorage) {}

  ngrxOnInitEffects(): Action {
    return ChatActions.init();
  }
}
