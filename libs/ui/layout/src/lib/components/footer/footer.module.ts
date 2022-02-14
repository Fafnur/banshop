import { NgModule } from '@angular/core';

import { ContainerModule } from '@banshop/ui/container';

import { CopyrightModule } from './components/copyright/copyright.module';
import { TermsModule } from './components/terms/terms.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [ContainerModule, CopyrightModule, TermsModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
