import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[web]',
})
export class WebDirective {
  private size!: string | number | undefined;

  @Input() set web(size: string | number | undefined) {
    this.size = size;
  }

  @HostBinding('class.web') get isWeb(): boolean {
    return typeof this.size === 'number' || typeof this.size === 'string';
  }
}
