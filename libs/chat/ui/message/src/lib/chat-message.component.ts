import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ChatMessage } from '@banshop/chat/common';

@Component({
  selector: 'banshop-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageComponent {
  @Input() chatMessage!: ChatMessage;
}
