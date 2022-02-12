import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EnvironmentService } from '@banshop/core/environments/service';

@Component({
  selector: 'banshop-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyrightComponent implements OnInit {
  year!: number;
  brand!: string;

  constructor(private readonly environmentService: EnvironmentService) {}

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.brand = this.environmentService.environments.brand;
  }
}
