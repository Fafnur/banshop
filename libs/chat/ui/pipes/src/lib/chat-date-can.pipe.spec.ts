import { cold } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { instance, mock, when } from 'ts-mockito';

import { CHAT_MESSAGES_STUB, ChatMessage } from '@banshop/chat/common';
import { ChatFacade } from '@banshop/chat/state';

import { ChatDateCanPipe } from './chat-date-can.pipe';

describe('ChatDateCanPipe', () => {
  let pipe: ChatDateCanPipe;
  let chatFacadeMock: ChatFacade;
  let chatMessages$: ReplaySubject<ChatMessage[]>;

  beforeEach(() => {
    chatFacadeMock = mock(ChatFacade);
    chatMessages$ = new ReplaySubject<ChatMessage[]>(1);
    when(chatFacadeMock.chatMessages$).thenReturn(chatMessages$);

    pipe = new ChatDateCanPipe(instance(chatFacadeMock));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create return result', () => {
    chatMessages$.next(CHAT_MESSAGES_STUB);
    expect(pipe.transform(CHAT_MESSAGES_STUB[0])).toBeObservable(cold('a', { a: true }));
  });

  it('create return result', () => {
    chatMessages$.next(CHAT_MESSAGES_STUB);
    expect(pipe.transform(CHAT_MESSAGES_STUB[1])).toBeObservable(cold('a', { a: false }));
  });
});
