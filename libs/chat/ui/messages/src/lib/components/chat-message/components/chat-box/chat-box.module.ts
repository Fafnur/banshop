import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatBoxComponent } from './chat-box.component';
import { ChatBodyModule } from './components/chat-body/chat-body.module';
import { ChatTimeModule } from './components/chat-time/chat-time.module';

@NgModule({
  imports: [CommonModule, ChatBodyModule, ChatTimeModule],
  declarations: [ChatBoxComponent],
  exports: [ChatBoxComponent],
})
export class ChatBoxModule {}
