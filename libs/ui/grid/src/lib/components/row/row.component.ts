import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'banshop-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent {
  @Input() noPadding = false;

  @HostBinding('class.no-padding') get isNoPadding(): boolean {
    return this.noPadding;
  }
}
