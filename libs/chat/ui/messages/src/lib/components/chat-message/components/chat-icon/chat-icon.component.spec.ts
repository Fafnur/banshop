import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule, MockPipe } from 'ng-mocks';
import { of } from 'rxjs';

import { CHAT_MESSAGE_STUB } from '@banshop/chat/common';
import { ChatIconCanPipe, ChatPipesModule } from '@banshop/chat/ui/pipes';

import { ChatIconComponent } from './chat-icon.component';
import { ChatIconComponentPo } from './chat-icon.component.po';

describe('ChatIconComponent', () => {
  let pageObject: ChatIconComponentPo;
  let fixture: ComponentFixture<ChatIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(ChatPipesModule)],
      declarations: [ChatIconComponent, MockPipe(ChatIconCanPipe, () => of(true))],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatIconComponent);
    pageObject = new ChatIconComponentPo(fixture);
    fixture.componentInstance.chatMessage = CHAT_MESSAGE_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.image).toBeTruthy();
  });
});
