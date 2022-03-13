import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromChat from './chat.reducer';
import { ChatEffects } from './chat.effects';
import { ChatFacade } from './chat.facade';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(fromChat.CHAT_FEATURE_KEY, fromChat.reducer), EffectsModule.forFeature([ChatEffects])],
  providers: [ChatFacade],
})
export class ChatStateModule {}
