import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatMessageModule } from '@banshop/chat/ui/message';

import { ChatMessagesComponent } from './chat-messages.component';

@NgModule({
  imports: [CommonModule, ChatMessageModule],
  declarations: [ChatMessagesComponent],
  exports: [ChatMessagesComponent],
})
export class ChatMessagesModule {}
