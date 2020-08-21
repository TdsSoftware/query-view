import { NgModule } from '@angular/core';
import { TableDirective } from './table.directive';
import { FilterDirective } from './filter.directive';

@NgModule({
  declarations: [TableDirective, FilterDirective],
  imports: [],
  exports: [TableDirective, FilterDirective],
})
export class CoreModule {}
