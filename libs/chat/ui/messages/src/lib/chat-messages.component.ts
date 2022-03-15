import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ChatMessage } from '@banshop/chat/common';

@Component({
  selector: 'banshop-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessagesComponent {
  @Input() chatMessages!: ChatMessage[];

  trackByFn(index: number, chatMessage: ChatMessage): number {
    return chatMessage.id;
  }
}
