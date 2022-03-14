import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { deepEqual, mock, verify, when } from 'ts-mockito';

import { CHAT_MESSAGE_CREATE_STUB, CHAT_MESSAGE_CREATED_STUB, CHAT_MESSAGES_STUB, ChatKeys } from '@banshop/chat/common';
import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { providerOf } from '@banshop/core/testing';

import * as ChatActions from './chat.actions';
import { ChatEffects } from './chat.effects';
import { CHAT_FEATURE_KEY, chatAdapter, chatInitialState } from './chat.reducer';

describe('ChatEffects', () => {
  let actions: Observable<Action>;
  let effects: ChatEffects;
  let localAsyncStorageMock: LocalAsyncStorage;
  let mockStore: MockStore;
  let dateSpy: jest.SpyInstance;
  const mockDate = new Date(CHAT_MESSAGE_CREATED_STUB.created);

  beforeEach(() => {
    localAsyncStorageMock = mock(LocalAsyncStorage);
  });

  afterEach(() => {
    dateSpy.mockRestore();
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          ChatEffects,
          provideMockActions(() => actions),
          provideMockStore(),
          providerOf(LocalAsyncStorage, localAsyncStorageMock),
        ],
      });
    })
  );

  beforeEach(() => {
    when(localAsyncStorageMock.getItem(ChatKeys.ChatMessages)).thenReturn(of(CHAT_MESSAGES_STUB));
    effects = TestBed.inject(ChatEffects);
    mockStore = TestBed.inject(MockStore);

    mockStore.setState({
      [CHAT_FEATURE_KEY]: chatAdapter.setAll(CHAT_MESSAGES_STUB, chatInitialState),
    });

    dateSpy = jest.spyOn<any, any>(global, 'Date').mockImplementation(() => mockDate);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ChatActions.init() });
      const expected = hot('-a-|', { a: ChatActions.restore({ chatMessages: CHAT_MESSAGES_STUB }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('restore$', () => {
    it('should return createMessage', () => {
      actions = hot('-a-|', { a: ChatActions.restore({ chatMessages: null }) });
      const expected = hot('-a-|', {
        a: ChatActions.createMessage({ chatMessageCreate: { message: 'Здравствуйте. Какой у вас вопрос?', isOwner: false } }),
      });

      expect(effects.restore$).toBeObservable(expected);
    });

    it('should work', () => {
      actions = hot('-a-|', { a: ChatActions.restore({ chatMessages: CHAT_MESSAGES_STUB }) });
      const expected = hot('---|');

      expect(effects.restore$).toBeObservable(expected);
    });
  });

  describe('createMessage$', () => {
    it('should return createMessageSuccess', () => {
      const action = ChatActions.createMessage({ chatMessageCreate: CHAT_MESSAGE_CREATE_STUB });
      const completion = ChatActions.createMessageSuccess({ chatMessage: CHAT_MESSAGE_CREATED_STUB });

      actions = hot('-a-|', { a: action });
      const expected = cold('-a-|', { a: completion });

      expect(effects.createMessage$).toBeObservable(expected);
    });
  });

  describe('createMessageSuccess$', () => {
    it('should return createMessageSuccess', () => {
      const action = ChatActions.createMessageSuccess({ chatMessage: CHAT_MESSAGE_CREATED_STUB });

      actions = hot('-a-|', { a: action });
      const expected = cold('---|');

      expect(effects.createMessageSuccess$).toBeObservable(expected);
      verify(localAsyncStorageMock.setItem(ChatKeys.ChatMessages, deepEqual(CHAT_MESSAGES_STUB))).once();
    });
  });
});
