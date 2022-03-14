import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatPipesModule } from '@banshop/chat/ui/pipes';

import { ChatIconComponent } from './chat-icon.component';

@NgModule({
  imports: [CommonModule, ChatPipesModule],
  declarations: [ChatIconComponent],
  exports: [ChatIconComponent],
})
export class ChatIconModule {}
