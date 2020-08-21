import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'core';

import { QueryViewComponent } from './query-view/query-view.component';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [QueryViewComponent, TableComponent, FilterComponent],
  imports: [CommonModule, CoreModule],
  exports: [QueryViewComponent],
})
export class QueryViewModule {}
