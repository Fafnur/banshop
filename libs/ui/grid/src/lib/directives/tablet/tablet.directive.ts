import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[tablet]',
})
export class TabletDirective {
  private size!: string | number | undefined;

  @Input() set tablet(size: string | number | undefined) {
    this.size = size;
  }

  @HostBinding('class.tablet') get isTablet(): boolean {
    return typeof this.size === 'number' || typeof this.size === 'string';
  }
}
