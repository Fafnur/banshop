import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatMessageComponent } from './chat-message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatMessageComponent],
  exports: [ChatMessageComponent],
})
export class ChatMessageModule {}
