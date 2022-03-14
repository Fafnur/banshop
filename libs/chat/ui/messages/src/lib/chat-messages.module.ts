import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatPipesModule } from '@banshop/chat/ui/pipes';

import { ChatMessagesComponent } from './chat-messages.component';
import { ChatDateModule } from './components/chat-date/chat-date.module';
import { ChatMessageModule } from './components/chat-message/chat-message.module';

@NgModule({
  imports: [CommonModule, ChatMessageModule, ChatDateModule, ChatPipesModule],
  declarations: [ChatMessagesComponent],
  exports: [ChatMessagesComponent],
})
export class ChatMessagesModule {}
