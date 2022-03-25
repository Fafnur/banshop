import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Response } from 'express';

import { NavigationPaths, PATHS } from '@banshop/core/navigation/common';

@Component({
  selector: 'banshop-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent implements OnInit {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths, @Optional() @Inject(RESPONSE) private readonly response: Response) {}

  ngOnInit(): void {
    this.response?.status(404);
  }
}
