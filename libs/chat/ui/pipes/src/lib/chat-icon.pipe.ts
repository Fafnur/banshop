import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'banshopChatIcon',
})
export class ChatIconPipe implements PipeTransform {
  transform(isOwner: boolean | undefined | null): string {
    const icon = isOwner ? 'user' : 'logo';

    return `/assets/images/${icon}.svg`;
  }
}
