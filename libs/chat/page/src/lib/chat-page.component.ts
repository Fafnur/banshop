import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ChatMessage } from '@banshop/chat/common';
import { ChatFacade } from '@banshop/chat/state';

@Component({
  selector: 'banshop-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatPageComponent implements OnInit {
  charMessages$!: Observable<ChatMessage[]>;

  constructor(private readonly chatFacade: ChatFacade) {}

  ngOnInit(): void {
    this.charMessages$ = this.chatFacade.chatMessages$;
  }
}
