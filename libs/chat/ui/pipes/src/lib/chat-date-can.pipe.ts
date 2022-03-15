import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ChatMessage } from '@banshop/chat/common';
import { ChatFacade } from '@banshop/chat/state';

@Pipe({
  name: 'banshopChatDateCan',
})
export class ChatDateCanPipe implements PipeTransform {
  constructor(private readonly chatFacade: ChatFacade) {}

  transform(chatMessage: ChatMessage): Observable<boolean> {
    return this.chatFacade.chatMessages$.pipe(
      map((messages) => {
        let prev: ChatMessage | null = null;

        for (const [index, message] of messages.entries()) {
          if (message.id === chatMessage.id) {
            prev = index > 0 ? messages[index - 1] : null;
            break;
          }
        }

        let result: boolean;
        if (prev) {
          result = new Date(prev.created).getDate() < new Date(chatMessage.created).getDate();
        } else {
          result = true;
        }

        return result;
      })
    );
  }
}
