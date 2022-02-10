import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { GridMode } from '../grid.util';

@Component({
  selector: 'banshop-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent implements OnInit {
  private lastModes!: Partial<Record<GridMode, number>>;

  @Input() set modes(modes: { handset?: number; tablet?: number; web?: number }) {
    this.update(modes ?? { [GridMode.Handset]: 0 });
  }

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this.lastModes) {
      this.update({ [GridMode.Handset]: 0 });
    }
  }

  private update(modes: Partial<Record<GridMode, number>>): void {
    if (!this.lastModes || JSON.stringify(this.lastModes) !== JSON.stringify(modes)) {
      if (this.lastModes) {
        for (const [key, value] of Object.entries(this.lastModes)) {
          let className = `column-${key}`;
          if (value && value > 0) {
            className += `-${value}`;
          }
          this.renderer.removeClass(this.elementRef.nativeElement, className);
        }
      }
      this.lastModes = modes;
      for (const [key, value] of Object.entries(this.lastModes)) {
        let className = `column-${key}`;
        if (value && value > 0) {
          className += `-${value}`;
        }
        this.renderer.addClass(this.elementRef.nativeElement, className);
      }
    }
  }
}
