import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

import { FormMaskService } from '@banshop/core/forms/mask';

import { RussianFormMaskService } from './form-mask.service';
import { RussianMatDataAdapter } from './mat-data-adapter';

registerLocaleData(localeRu);

@NgModule({
  imports: [MatNativeDateModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru-RU',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'RUB',
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'ru-RU',
    },
    {
      provide: DateAdapter,
      useClass: RussianMatDataAdapter,
    },
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
    {
      provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
    {
      provide: FormMaskService,
      useClass: RussianFormMaskService,
    },
  ],
})
export class LocalizationModule {}
