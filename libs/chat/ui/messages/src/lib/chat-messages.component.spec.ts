import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule, MockPipe } from 'ng-mocks';
import { of } from 'rxjs';

import { CHAT_MESSAGES_STUB } from '@banshop/chat/common';
import { ChatDateCanPipe } from '@banshop/chat/ui/pipes';

import { ChatMessagesComponent } from './chat-messages.component';
import { ChatMessagesComponentPo } from './chat-messages.component.po';
import { ChatDateModule } from './components/chat-date/chat-date.module';
import { ChatMessageModule } from './components/chat-message/chat-message.module';

describe('ChatMessagesComponent', () => {
  let pageObject: ChatMessagesComponentPo;
  let fixture: ComponentFixture<ChatMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(ChatMessageModule), MockModule(ChatDateModule)],
      declarations: [ChatMessagesComponent, MockPipe(ChatDateCanPipe, () => of(true))],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessagesComponent);
    pageObject = new ChatMessagesComponentPo(fixture);
    fixture.componentInstance.chatMessages = CHAT_MESSAGES_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.dates.length).toBe(CHAT_MESSAGES_STUB.length);
    expect(pageObject.messages.length).toBe(CHAT_MESSAGES_STUB.length);
  });
});
