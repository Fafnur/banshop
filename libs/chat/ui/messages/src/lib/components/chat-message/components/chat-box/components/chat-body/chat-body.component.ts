import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBodyComponent {}
