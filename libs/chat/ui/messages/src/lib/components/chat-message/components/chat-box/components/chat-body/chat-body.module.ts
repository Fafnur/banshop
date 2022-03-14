import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatBodyComponent } from './chat-body.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatBodyComponent],
  exports: [ChatBodyComponent],
})
export class ChatBodyModule {}
