import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { CHAT_MESSAGES_STUB, ChatMessage } from '@banshop/chat/common';
import { ChatFacade } from '@banshop/chat/state';
import { ChatFormModule } from '@banshop/chat/ui/form';
import { ChatMessagesModule } from '@banshop/chat/ui/messages';
import { providerOf } from '@banshop/core/testing';

import { ChatPageComponent } from './chat-page.component';
import { ChatPageComponentPo } from './chat-page.component.po';

describe('ChatPageComponent', () => {
  let pageObject: ChatPageComponentPo;
  let fixture: ComponentFixture<ChatPageComponent>;
  let chatFacadeMock: ChatFacade;

  let chatMessages$: ReplaySubject<ChatMessage[]>;

  beforeEach(() => {
    chatFacadeMock = mock(ChatFacade);

    chatMessages$ = new ReplaySubject<ChatMessage[]>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, MockModule(ChatMessagesModule), MockModule(ChatFormModule)],
      declarations: [ChatPageComponent],
      providers: [providerOf(ChatFacade, chatFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(chatFacadeMock.chatMessages$).thenReturn(chatMessages$);

    fixture = TestBed.createComponent(ChatPageComponent);
    pageObject = new ChatPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    chatMessages$.next(CHAT_MESSAGES_STUB);
    fixture.detectChanges();

    expect(pageObject.messages).toBeTruthy();
    expect(pageObject.form).toBeTruthy();
  });
});
