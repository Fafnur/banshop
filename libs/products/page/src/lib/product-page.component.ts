import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { MetaService } from '@banshop/core/meta/service';
import { isNotNullOrUndefined } from '@banshop/core/utils/operators';
import { Product } from '@banshop/products/common';
import { ProductFacade } from '@banshop/products/state';

@Component({
  selector: 'banshop-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent implements OnInit {
  product$!: Observable<Product>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productFacade: ProductFacade,
    private readonly metaService: MetaService
  ) {}

  ngOnInit(): void {
    const { slug } = this.activatedRoute.snapshot.params;

    this.product$ = this.productFacade.productBySlug$(slug).pipe(
      isNotNullOrUndefined(),
      tap((product) => {
        this.metaService.update({
          title: product.title,
          description: product.description,
          keywords: product.title,
        });
      })
    );
  }
}
