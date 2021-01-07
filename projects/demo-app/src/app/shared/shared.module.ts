import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { SelectionTableComponent } from './selection-table/selection-table.component';
import { FilterWrapperComponent } from './filter-wrapper/filter-wrapper.component';
import { CommonModule } from '@angular/common';
import { DisplayErrorPipe } from './display-error.pipe';

@NgModule({
  exports: [
    MaterialModule,
    FlexLayoutModule,
    SelectionTableComponent,
    FilterWrapperComponent,
    DisplayErrorPipe,
  ],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  declarations: [
    SelectionTableComponent,
    FilterWrapperComponent,
    DisplayErrorPipe,
  ],
})
export class SharedModule {}
