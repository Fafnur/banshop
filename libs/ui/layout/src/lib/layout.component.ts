import { Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LayoutService } from '@banshop/core/layout/service';

@Component({
  selector: 'banshop-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  readonly breakpoints = Breakpoints;

  layoutType$!: Observable<string>;

  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutType$ = this.layoutService.layoutType$;
  }
}
