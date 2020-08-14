import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';

import { DataViewComponent } from './data-view/data-view.component';
import { TableComponent } from './table/table.component';
import { TableDirective } from './table/table.directive';
import { FilterComponent } from './filter/filter.component';
import { FilterDirective } from './filter/filter.directive';
import { PaginatorComponent } from './paginator/paginator.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './search/search.component';
import { FilterButtonsComponent } from './filter-buttons/filter-buttons.component';

export const MATERIAL_MODULES = [
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [
    DataViewComponent,
    TableComponent,
    TableDirective,
    FilterComponent,
    FilterDirective,
    PaginatorComponent,
    ToolbarComponent,
    SearchComponent,
    FilterButtonsComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MATERIAL_MODULES,
  ],
  exports: [DataViewComponent, FilterButtonsComponent],
})
export class DataViewModule {}
