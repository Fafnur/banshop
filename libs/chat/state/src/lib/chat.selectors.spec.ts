import { CHAT_MESSAGES_STUB, ChatMessage } from '@banshop/chat/common';

import { CHAT_FEATURE_KEY, chatAdapter, chatInitialState, ChatPartialState, ChatState } from './chat.reducer';
import * as ChatSelectors from './chat.selectors';

describe('Chat Selectors', () => {
  const getStore = (state?: Partial<ChatState>, chatMessages: ChatMessage[] = []) => ({
    [CHAT_FEATURE_KEY]: chatAdapter.setAll(chatMessages, { ...chatInitialState, ...state }),
  });

  let state: ChatPartialState;

  beforeEach(() => {
    state = getStore();
  });

  it('selectChatMessages() should return chatMessages', () => {
    state = getStore({}, CHAT_MESSAGES_STUB);
    const results = ChatSelectors.selectChatMessages(state);

    expect(results.length).toBe(CHAT_MESSAGES_STUB.length);
  });

  it('selectChatMessagesEntities() should return chatMessages dictionary', () => {
    state = getStore({}, CHAT_MESSAGES_STUB);
    const results = ChatSelectors.selectChatMessagesEntities(state);

    expect(Object.keys(results).length).toBe(CHAT_MESSAGES_STUB.length);
  });

  it('selectLoaded() should return loaded', () => {
    state = getStore({ loaded: true });
    const result = ChatSelectors.selectLoaded(state);

    expect(result).toBeTruthy();
  });
});
