import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorCodeComponent } from './components/error-code/error-code.component';
import { ErrorCodeModule } from './components/error-code/error-code.module';
import { ErrorDescriptionComponent } from './components/error-description/error-description.component';
import { ErrorDescriptionModule } from './components/error-description/error-description.module';
import { ErrorLinksComponent } from './components/error-links/error-links.component';
import { ErrorLinksModule } from './components/error-links/error-links.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ErrorMessageModule } from './components/error-message/error-message.module';
import { ErrorTitleComponent } from './components/error-title/error-title.component';
import { ErrorTitleModule } from './components/error-title/error-title.module';
import { ErrorCardComponent } from './error-card.component';

@NgModule({
  imports: [CommonModule, ErrorCodeModule, ErrorDescriptionModule, ErrorLinksModule, ErrorMessageModule, ErrorTitleModule],
  declarations: [ErrorCardComponent],
  exports: [
    ErrorCardComponent,
    ErrorCodeComponent,
    ErrorDescriptionComponent,
    ErrorLinksComponent,
    ErrorMessageComponent,
    ErrorTitleComponent,
  ],
})
export class ErrorCardModule {}
