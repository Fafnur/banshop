import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ChatMessage } from '@banshop/chat/common';

@Component({
  selector: 'banshop-chat-icon',
  templateUrl: './chat-icon.component.html',
  styleUrls: ['./chat-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatIconComponent {
  @Input() chatMessage!: ChatMessage;
}
