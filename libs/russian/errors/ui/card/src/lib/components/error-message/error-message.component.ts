import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {}
