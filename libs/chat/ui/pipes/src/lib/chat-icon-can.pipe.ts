import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ChatMessage } from '@banshop/chat/common';
import { ChatFacade } from '@banshop/chat/state';

@Pipe({
  name: 'banshopChatIconCan',
})
export class ChatIconCanPipe implements PipeTransform {
  constructor(private readonly chatFacade: ChatFacade) {}

  transform(chatMessage: ChatMessage): Observable<boolean> {
    return this.chatFacade.chatMessages$.pipe(
      map((messages) => {
        let prev: ChatMessage | null = null;
        let next: ChatMessage | null = null;

        for (const [index, message] of messages.entries()) {
          if (message.id === chatMessage.id) {
            prev = index > 0 ? messages[index - 1] : null;
            next = index + 1 < messages.length ? messages[index + 1] : null;
            break;
          }
        }

        let result: boolean;
        if (prev && next) {
          result = next.isOwner !== chatMessage.isOwner || prev.isOwner !== chatMessage.isOwner;
        } else {
          result = true;
        }

        return result;
      })
    );
  }
}
