import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { CHAT_STUB, ChatKeys } from '@banshop/chat/common';
import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { providerOf } from '@banshop/core/testing';

import * as ChatActions from './chat.actions';
import { ChatEffects } from './chat.effects';

describe('ChatEffects', () => {
  let actions: Observable<Action>;
  let effects: ChatEffects;
  let localAsyncStorageMock: LocalAsyncStorage;

  beforeEach(() => {
    localAsyncStorageMock = mock(LocalAsyncStorage);
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
    when(localAsyncStorageMock.getItem(ChatKeys.Chat)).thenReturn(of(CHAT_STUB));
    effects = TestBed.inject(ChatEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ChatActions.init() });
      const expected = hot('-a-|', { a: ChatActions.restore({ chat: CHAT_STUB }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
