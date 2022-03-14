import { NgModule } from '@angular/core';

import { ChatIconPipe } from './chat-icon.pipe';
import { ChatIconCanPipe } from './chat-icon-can.pipe';

const pipes = [ChatIconPipe, ChatIconCanPipe];

@NgModule({
  declarations: [...pipes],
  exports: pipes,
})
export class ChatPipesModule {}
