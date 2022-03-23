import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartFacade } from '@banshop/cart/state';
import { NavigationLink, NavigationPaths, PATHS } from '@banshop/core/navigation/common';

export function getLinks(paths: NavigationPaths): NavigationLink[] {
  return [
    {
      route: paths.home,
      label: 'home',
      routerLinkActiveOptions: {
        exact: true,
      },
    },
    {
      route: paths.cart,
      label: 'shopping_basket',
    },
    {
      route: paths.support,
      label: 'chat',
    },
    {
      route: paths.terms,
      label: 'help',
    },
  ];
}

@Component({
  selector: 'banshop-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  links!: NavigationLink[];
  count$!: Observable<number>;

  constructor(private readonly cartFacade: CartFacade, @Inject(PATHS) public readonly paths: NavigationPaths) {}

  ngOnInit(): void {
    this.count$ = this.cartFacade.count$;
    this.links = getLinks(this.paths);
  }

  trackByFn(index: number, link: NavigationLink): string {
    return link.route;
  }
}
