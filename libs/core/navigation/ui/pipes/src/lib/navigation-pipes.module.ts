import { NgModule } from '@angular/core';

import { NavigationExternalPathPipe } from './navigation-external-path.pipe';
import { NavigationPathPipe } from './navigation-path.pipe';

const pipes = [NavigationPathPipe, NavigationExternalPathPipe];

@NgModule({
  declarations: pipes,
  exports: pipes,
})
export class NavigationPipesModule {}
