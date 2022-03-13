import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatStateModule } from '@banshop/chat/state';
import { ChatFormModule } from '@banshop/chat/ui/form';
import { ChatMessagesModule } from '@banshop/chat/ui/messages';

import { ChatPageComponent } from './chat-page.component';
import { ChatPageRoutingModule } from './chat-page-routing.module';

@NgModule({
  imports: [CommonModule, ChatPageRoutingModule, ChatStateModule, ChatMessagesModule, ChatFormModule],
  declarations: [ChatPageComponent],
})
export class ChatPageModule {}
