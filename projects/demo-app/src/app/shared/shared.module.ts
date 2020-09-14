import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { SelectionTableComponent } from './selection-table/selection-table.component';
import { FilterWrapperComponent } from './filter-wrapper/filter-wrapper.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    MaterialModule,
    FlexLayoutModule,
    SelectionTableComponent,
    FilterWrapperComponent,
  ],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  declarations: [SelectionTableComponent, FilterWrapperComponent],
})
export class SharedModule {}
