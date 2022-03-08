import { Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LayoutService } from '@banshop/core/layout/service';

@Component({
  selector: 'banshop-multiplatform',
  templateUrl: './multiplatform.component.html',
  styleUrls: ['./multiplatform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiplatformComponent implements OnInit {
  readonly breakpoints = Breakpoints;

  layoutType$!: Observable<string>;

  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutType$ = this.layoutService.layoutType$;
  }
}
