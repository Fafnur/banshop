import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-error-title',
  templateUrl: './error-title.component.html',
  styleUrls: ['./error-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorTitleComponent {}
