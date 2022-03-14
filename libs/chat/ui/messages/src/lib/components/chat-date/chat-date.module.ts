import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatDateComponent } from './chat-date.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatDateComponent],
  exports: [ChatDateComponent],
})
export class ChatDateModule {}
