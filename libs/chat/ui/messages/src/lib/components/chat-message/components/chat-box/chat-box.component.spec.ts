import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { CHAT_MESSAGE_STUB } from '@banshop/chat/common';

import { ChatBoxComponent } from './chat-box.component';
import { ChatBoxComponentPo } from './chat-box.component.po';
import { ChatBodyModule } from './components/chat-body/chat-body.module';
import { ChatTimeModule } from './components/chat-time/chat-time.module';

describe('ChatBoxComponent', () => {
  let pageObject: ChatBoxComponentPo;
  let fixture: ComponentFixture<ChatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(ChatBodyModule), MockModule(ChatTimeModule)],
      declarations: [ChatBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxComponent);
    pageObject = new ChatBoxComponentPo(fixture);
    fixture.componentInstance.chatMessage = CHAT_MESSAGE_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.bodyText).toBe(CHAT_MESSAGE_STUB.message);
    expect(pageObject.timeText).toBe('1:42 PM');
  });
});
