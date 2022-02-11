import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banshop-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {}
