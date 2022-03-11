import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TermsPageComponent } from './terms-page.component';
import { TermsPageRoutingModule } from './terms-page-routing.module';

@NgModule({
  imports: [CommonModule, TermsPageRoutingModule],
  declarations: [TermsPageComponent],
})
export class TermsPageModule {}
