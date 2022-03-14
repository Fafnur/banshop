import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { CHAT_MESSAGE_STUB } from '@banshop/chat/common';
import { ChatPipesModule } from '@banshop/chat/ui/pipes';

import { ChatMessageComponent } from './chat-message.component';
import { ChatMessageComponentPo } from './chat-message.component.po';
import { ChatBoxModule } from './components/chat-box/chat-box.module';
import { ChatIconModule } from './components/chat-icon/chat-icon.module';

describe('ChatMessageComponent', () => {
  let pageObject: ChatMessageComponentPo;
  let fixture: ComponentFixture<ChatMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(ChatBoxModule), MockModule(ChatIconModule), MockModule(ChatPipesModule)],
      declarations: [ChatMessageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessageComponent);
    pageObject = new ChatMessageComponentPo(fixture);
    fixture.componentInstance.chatMessage = CHAT_MESSAGE_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.icon).toBeTruthy();
    expect(pageObject.box).toBeTruthy();
  });
});
