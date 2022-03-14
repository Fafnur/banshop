import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { CHAT_STUB, ChatKeys } from '@banshop/chat/common';
import { LocalAsyncStorage } from '@banshop/core/storage/local';
import { providerOf } from '@banshop/core/testing';

import { ChatEffects } from './chat.effects';
import { ChatFacade } from './chat.facade';
import { CHAT_FEATURE_KEY, reducer } from './chat.reducer';

describe('ChatFacade', () => {
  let facade: ChatFacade;
  let localAsyncStorageMock: LocalAsyncStorage;

  describe('used in NgModule', () => {
    beforeEach(() => {
      localAsyncStorageMock = mock(LocalAsyncStorage);
    });

    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(CHAT_FEATURE_KEY, reducer), EffectsModule.forFeature([ChatEffects])],
        providers: [ChatFacade, providerOf(LocalAsyncStorage, localAsyncStorageMock)],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      when(localAsyncStorageMock.getItem(ChatKeys.ChatMessages)).thenReturn(of(CHAT_STUB));

      facade = TestBed.inject(ChatFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
