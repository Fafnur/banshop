import { Action } from '@ngrx/store';

import { CHAT_MESSAGE_CREATE_STUB, CHAT_MESSAGE_CREATED_STUB, CHAT_MESSAGES_STUB, CHAT_STUB, ChatMessage } from '@banshop/chat/common';
import { HTTP_ERROR_STUB } from '@banshop/core/api/service';

import * as ChatActions from './chat.actions';
import { chatAdapter, chatInitialState, ChatState, reducer } from './chat.reducer';

describe('Chat Reducer', () => {
  const getState = (state?: Partial<ChatState>, messages: ChatMessage[] = []): ChatState =>
    chatAdapter.setAll(messages, { ...chatInitialState, ...state });

  let state: ChatState;

  beforeEach(() => {
    state = getState();
  });

  it('init() should set init state', () => {
    const action = ChatActions.init();

    const result = reducer(state, action);

    expect(result.loaded).toBeFalsy();
    expect(result.messageCreating).toBeFalsy();
    expect(result.ids.length).toBe(0);
  });

  it('restore() should set chat messages', () => {
    const action = ChatActions.restore({ chatMessages: CHAT_MESSAGES_STUB });

    const result = reducer(state, action);

    expect(result.loaded).toBeTruthy();
    expect(result.messageCreating).toBeFalsy();
    expect(result.ids.length).toBe(CHAT_STUB.messages.length);
  });

  it('createMessage() should set messageCreating true', () => {
    const action = ChatActions.createMessage({ chatMessageCreate: CHAT_MESSAGE_CREATE_STUB });

    const result = reducer(state, action);

    expect(result.messageCreating).toBeTruthy();
  });

  it('createMessageSuccess() should add message and set messageCreating false', () => {
    state = getState({ messageCreating: true }, CHAT_MESSAGES_STUB);
    const action = ChatActions.createMessageSuccess({ chatMessage: CHAT_MESSAGE_CREATED_STUB });

    const result = reducer(state, action);

    expect(result.messageCreating).toBeFalsy();
    expect(result.ids.length).toBe(CHAT_MESSAGES_STUB.length + 1);
  });

  it('createMessageFailure() should set messageCreating false', () => {
    state = getState({ messageCreating: true });
    const action = ChatActions.createMessageFailure({ error: HTTP_ERROR_STUB });

    const result = reducer(state, action);

    expect(result.messageCreating).toBeFalsy();
  });

  it('should return the previous state', () => {
    const action = {} as Action;

    const result = reducer(chatInitialState, action);

    expect(result).toBe(chatInitialState);
  });
});
