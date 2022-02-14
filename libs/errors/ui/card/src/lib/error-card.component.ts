import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'banshop-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorCardComponent {
  @Input() color?: 'primary' | 'warning' | 'danger';

  @HostBinding('class.error-primary') get isPrimary(): boolean {
    return this.color === 'primary';
  }

  @HostBinding('class.error-warning') get isWarning(): boolean {
    return this.color === 'warning';
  }

  @HostBinding('class.error-danger') get isDanger(): boolean {
    return this.color === 'danger';
  }
}
