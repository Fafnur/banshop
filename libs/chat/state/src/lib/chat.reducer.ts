import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { ChatMessage } from '@banshop/chat/common';

import * as ChatActions from './chat.actions';

export const CHAT_FEATURE_KEY = 'chat';

export interface ChatState extends EntityState<ChatMessage> {
  loaded: boolean;
  messageCreating: boolean;
}

export interface ChatPartialState {
  readonly [CHAT_FEATURE_KEY]: ChatState;
}

export const chatAdapter: EntityAdapter<ChatMessage> = createEntityAdapter<ChatMessage>();

export const chatInitialState: ChatState = chatAdapter.getInitialState({
  loaded: false,
  messageCreating: false,
});

const chatReducer = createReducer(
  chatInitialState,
  on(
    ChatActions.init,
    (state): ChatState => ({
      ...state,
      loaded: false,
    })
  ),
  on(
    ChatActions.restore,
    (state, { chatMessages }): ChatState =>
      chatMessages?.length
        ? chatAdapter.setAll(chatMessages, {
            ...state,
            loaded: true,
          })
        : state
  ),
  on(
    ChatActions.createMessage,
    (state): ChatState => ({
      ...state,
      messageCreating: true,
    })
  ),
  on(
    ChatActions.createMessageSuccess,
    (state, { chatMessage }): ChatState =>
      chatAdapter.addOne(chatMessage, {
        ...state,
        messageCreating: false,
      })
  ),
  on(
    ChatActions.createMessageFailure,
    (state): ChatState => ({
      ...state,
      messageCreating: false,
    })
  )
);

export function reducer(state: ChatState | undefined, action: Action): ChatState {
  return chatReducer(state, action);
}
