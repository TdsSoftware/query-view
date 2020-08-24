import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { CoreModule } from 'core';

import { QueryViewComponent } from './query-view/query-view.component';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';

export const MATERIAL_MODULE = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [
    QueryViewComponent,
    TableComponent,
    FilterComponent,
    SearchComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CoreModule,
    MATERIAL_MODULE,
  ],
  exports: [QueryViewComponent],
})
export class QueryViewModule {}
