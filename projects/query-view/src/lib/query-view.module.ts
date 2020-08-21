import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'core';

import { QueryViewComponent } from './query-view/query-view.component';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { MatSidenavModule } from '@angular/material/sidenav';

export const MATERIAL_MODULE = [MatSidenavModule];

@NgModule({
  declarations: [QueryViewComponent, TableComponent, FilterComponent],
  imports: [CommonModule, CoreModule, MATERIAL_MODULE],
  exports: [QueryViewComponent],
})
export class QueryViewModule {}
