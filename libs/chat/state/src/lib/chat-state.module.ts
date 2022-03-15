import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ChatEffects } from './chat.effects';
import { ChatFacade } from './chat.facade';
import { CHAT_FEATURE_KEY, reducer } from './chat.reducer';

@NgModule({
  imports: [StoreModule.forFeature(CHAT_FEATURE_KEY, reducer), EffectsModule.forFeature([ChatEffects])],
  providers: [ChatFacade],
})
export class ChatStateModule {}
