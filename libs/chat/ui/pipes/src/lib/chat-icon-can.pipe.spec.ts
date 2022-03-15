import { cold } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { instance, mock, when } from 'ts-mockito';

import { CHAT_MESSAGE_CREATED_STUB, CHAT_MESSAGE_STUB, CHAT_MESSAGES_STUB, ChatMessage } from '@banshop/chat/common';
import { ChatFacade } from '@banshop/chat/state';

import { ChatIconCanPipe } from './chat-icon-can.pipe';

describe('ChatIconCanPipe', () => {
  let pipe: ChatIconCanPipe;
  let chatFacadeMock: ChatFacade;
  let chatMessages$: ReplaySubject<ChatMessage[]>;

  beforeEach(() => {
    chatFacadeMock = mock(ChatFacade);
    chatMessages$ = new ReplaySubject<ChatMessage[]>(1);
    when(chatFacadeMock.chatMessages$).thenReturn(chatMessages$);

    pipe = new ChatIconCanPipe(instance(chatFacadeMock));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create return result true', () => {
    chatMessages$.next(CHAT_MESSAGES_STUB);
    expect(pipe.transform(CHAT_MESSAGES_STUB[0])).toBeObservable(cold('a', { a: true }));
  });

  it('create return result false', () => {
    chatMessages$.next([CHAT_MESSAGE_CREATED_STUB, CHAT_MESSAGE_STUB, CHAT_MESSAGE_CREATED_STUB]);
    expect(pipe.transform(CHAT_MESSAGE_STUB)).toBeObservable(cold('a', { a: false }));
  });
});
