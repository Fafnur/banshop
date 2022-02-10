import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

import { GridMode } from '../grid.util';

@Component({
  selector: 'banshop-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent implements OnInit {
  @Input() noPadding = false;

  @Input() set mode(mode: 'handset' | 'tablet' | 'web' | undefined) {
    this.update(mode ?? GridMode.Handset);
  }

  @HostBinding('class.no-padding') get isNoPadding(): boolean {
    return this.noPadding;
  }

  private lastMode!: string;

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this.lastMode) {
      this.update(GridMode.Handset);
    }
  }

  private update(mode: string): void {
    if (this.lastMode !== mode) {
      if (this.lastMode) {
        this.renderer.removeClass(this.elementRef.nativeElement, `row-${mode}`);
      }
      this.lastMode = mode;
      this.renderer.addClass(this.elementRef.nativeElement, `row-${mode}`);
    }
  }
}
