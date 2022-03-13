import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as ChatActions from './chat.actions';
import { ChatEffects } from './chat.effects';
import { ChatFacade } from './chat.facade';
import { CHAT_FEATURE_KEY, ChatState, chatInitialState, reducer } from './chat.reducer';

interface TestSchema {
  chat: ChatState;
}

describe('ChatFacade', () => {
  let facade: ChatFacade;
  let store: Store<TestSchema>;
  const createChatEntity = (id: string, name = ''): ChatEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(CHAT_FEATURE_KEY, reducer), EffectsModule.forFeature([ChatEffects])],
        providers: [ChatFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ChatFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allChat$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allChat$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadChatSuccess` to manually update list
     */
    it('allChat$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allChat$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ChatActions.loadChatSuccess({
          chat: [createChatEntity('AAA'), createChatEntity('BBB')],
        })
      );

      list = await readFirst(facade.allChat$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
