import { NgModule } from '@angular/core';

import { ColumnComponent } from './components/column/column.component';
import { ColumnModule } from './components/column/column.module';
import { RowComponent } from './components/row/row.component';
import { RowModule } from './components/row/row.module';
import { HandsetDirective } from './directives/handset/handset.directive';
import { HandsetModule } from './directives/handset/handset.module';
import { TabletDirective } from './directives/tablet/tablet.directive';
import { TabletModule } from './directives/tablet/tablet.module';
import { WebDirective } from './directives/web/web.directive';
import { WebModule } from './directives/web/web.module';

@NgModule({
  imports: [ColumnModule, RowModule, HandsetModule, TabletModule, WebModule],
  exports: [RowComponent, ColumnComponent, HandsetDirective, TabletDirective, WebDirective],
})
export class GridModule {}
