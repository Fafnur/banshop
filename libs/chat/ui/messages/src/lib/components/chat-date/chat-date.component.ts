import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ChatMessage } from '@banshop/chat/common';

@Component({
  selector: 'banshop-chat-date',
  templateUrl: './chat-date.component.html',
  styleUrls: ['./chat-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatDateComponent {
  @Input() chatMessage!: ChatMessage;
}
