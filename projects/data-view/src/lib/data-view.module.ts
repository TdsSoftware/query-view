import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { DataViewComponent } from './data-view/data-view.component';
import { TableComponent } from './table/table.component';
import { TableDirective } from './table/table.directive';
import { FilterComponent } from './filter/filter.component';
import { FilterDirective } from './filter/filter.directive';

export const MATERIAL_MODULES = [
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    DataViewComponent,
    TableComponent,
    TableDirective,
    FilterComponent,
    FilterDirective,
  ],
  imports: [FlexLayoutModule, MATERIAL_MODULES],
  exports: [DataViewComponent],
})
export class DataViewModule {}
