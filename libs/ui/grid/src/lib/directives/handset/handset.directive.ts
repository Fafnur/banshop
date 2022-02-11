import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[handset]',
})
export class HandsetDirective {
  private size!: string | number | undefined;

  @Input() set handset(size: string | number | undefined) {
    this.size = size;
  }

  @HostBinding('class.handset') get isHandset(): boolean {
    return typeof this.size === 'number' || typeof this.size === 'string';
  }
}
