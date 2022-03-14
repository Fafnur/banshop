import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHAT_MESSAGE_STUB } from '@banshop/chat/common';

import { ChatDateComponent } from './chat-date.component';
import { ChatDateComponentPo } from './chat-date.component.po';

describe('ChatDateComponent', () => {
  let pageObject: ChatDateComponentPo;
  let fixture: ComponentFixture<ChatDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ChatDateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDateComponent);
    pageObject = new ChatDateComponentPo(fixture);
    fixture.componentInstance.chatMessage = CHAT_MESSAGE_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.date).toBe('3/13/22');
  });
});
