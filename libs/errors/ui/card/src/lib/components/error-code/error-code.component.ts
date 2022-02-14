import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-error-code',
  templateUrl: './error-code.component.html',
  styleUrls: ['./error-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorCodeComponent {}
