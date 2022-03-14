import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatPipesModule } from '@banshop/chat/ui/pipes';

import { ChatMessageComponent } from './chat-message.component';
import { ChatBoxModule } from './components/chat-box/chat-box.module';
import { ChatIconModule } from './components/chat-icon/chat-icon.module';

@NgModule({
  imports: [CommonModule, ChatBoxModule, ChatIconModule, ChatPipesModule],
  declarations: [ChatMessageComponent],
  exports: [ChatMessageComponent],
})
export class ChatMessageModule {}
