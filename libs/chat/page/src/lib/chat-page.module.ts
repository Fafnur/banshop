import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatStateModule } from '@banshop/chat/state';

import { ChatPageComponent } from './chat-page.component';
import { ChatPageRoutingModule } from './chat-page-routing.module';

@NgModule({
  imports: [CommonModule, ChatPageRoutingModule, ChatStateModule],
  declarations: [ChatPageComponent],
})
export class ChatPageModule {}
