import { NgModule } from '@angular/core';
import { HAMMER_GESTURE_CONFIG, HammerModule as BaseHammerModule } from '@angular/platform-browser';

import { HammerConfig } from './hammer.config';

@NgModule({
  imports: [BaseHammerModule],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
  ],
})
export class HammerModule {}
