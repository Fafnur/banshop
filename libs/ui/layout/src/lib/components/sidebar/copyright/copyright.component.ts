import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'banshop-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyrightComponent implements OnInit {
  year!: number;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
