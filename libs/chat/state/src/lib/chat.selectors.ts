import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CHAT_FEATURE_KEY, chatAdapter, ChatState } from './chat.reducer';

export const selectChatState = createFeatureSelector<ChatState>(CHAT_FEATURE_KEY);

const { selectAll, selectEntities } = chatAdapter.getSelectors();

export const selectLoaded = createSelector(selectChatState, (state) => state.loaded);

export const selectChatMessages = createSelector(selectChatState, (state) => selectAll(state));

export const selectChatMessagesEntities = createSelector(selectChatState, (state) => selectEntities(state));
