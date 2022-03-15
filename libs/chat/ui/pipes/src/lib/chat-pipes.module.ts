import { NgModule } from '@angular/core';

import { ChatDateCanPipe } from './chat-date-can.pipe';
import { ChatIconPipe } from './chat-icon.pipe';
import { ChatIconCanPipe } from './chat-icon-can.pipe';

const pipes = [ChatIconPipe, ChatIconCanPipe, ChatDateCanPipe];

@NgModule({
  declarations: [...pipes],
  exports: pipes,
})
export class ChatPipesModule {}
