import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatTimeComponent } from './chat-time.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatTimeComponent],
  exports: [ChatTimeComponent],
})
export class ChatTimeModule {}
