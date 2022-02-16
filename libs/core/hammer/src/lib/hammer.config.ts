import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
  override overrides = {
    swipe: { velocity: 0.4, threshold: 20 },
    pinch: { enable: false },
    rotate: { enable: false },
  };
}
