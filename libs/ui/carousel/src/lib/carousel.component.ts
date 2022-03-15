import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'banshop-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  @Input() set images(images: string[]) {
    this.slides = images;
    this.active = 0;
  }
  @Output() selected = new EventEmitter<number>();
  @Output() clicked = new EventEmitter<void>();

  active = 0;
  slides!: string[];

  onClicked(): void {
    this.clicked.emit();
  }

  onSelected(index: number): void {
    this.active = index;
    this.selected.emit(index);
  }

  onPrev(): void {
    this.active = this.active === 0 ? this.slides.length - 1 : this.active - 1;
  }

  onNext(): void {
    this.active = this.active === this.slides.length - 1 ? 0 : this.active + 1;
  }
}
