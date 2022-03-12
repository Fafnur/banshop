import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EnvironmentService } from '@banshop/core/environments/service';

@Component({
  selector: 'banshop-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrls: ['./terms-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsPageComponent implements OnInit {
  brand!: string;
  appHost!: string;

  constructor(private readonly environmentService: EnvironmentService) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand.toUpperCase();
    this.appHost = this.environmentService.environments.appHost;
  }
}
