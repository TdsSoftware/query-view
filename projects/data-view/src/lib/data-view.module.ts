import { NgModule } from '@angular/core';

import { DataViewComponent } from './data-view/data-view.component';
import { TableComponent } from './table/table.component';
import { TableDirective } from './table/table.directive';

@NgModule({
  declarations: [DataViewComponent, TableComponent, TableDirective],
  imports: [],
  exports: [DataViewComponent],
})
export class DataViewModule {}
