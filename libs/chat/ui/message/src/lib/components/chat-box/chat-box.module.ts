import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatBoxComponent } from './chat-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatBoxComponent],
  exports: [ChatBoxComponent],
})
export class ChatBoxModule {}
