import { ChangeDetectorRef, Directive, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntil, tap } from 'rxjs/operators';

import { extractTouchedChanges } from '@banshop/core/forms/utils';
import { DestroyService } from '@banshop/core/utils/destroy';

@Directive({
  selector: '[banshopExtractTouched]',
  providers: [DestroyService],
})
export class ExtractTouchedDirective implements OnInit {
  @Input() control?: FormControl;
  @Input() children?: FormControl | FormControl[];

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly destroy$: DestroyService) {}

  ngOnInit(): void {
    if (this.control) {
      extractTouchedChanges(this.control)
        .pipe(
          tap(() => {
            this.changeDetectorRef.markForCheck();
            if (this.children) {
              if (Array.isArray(this.children)) {
                this.children.forEach((control) => control.markAsTouched());
              } else {
                this.children.markAsTouched();
              }
            }
          }),
          takeUntil(this.destroy$)
        )
        .subscribe();
    } else {
      console.warn('Control is not found on extract touched');
    }
  }
}
