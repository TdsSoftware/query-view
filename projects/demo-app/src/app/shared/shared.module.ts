import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { SelectionTableComponent } from './selection-table/selection-table.component';
import { FilterWrapperComponent } from './filter-wrapper/filter-wrapper.component';

@NgModule({
  exports: [
    MaterialModule,
    FlexLayoutModule,
    SelectionTableComponent,
    FilterWrapperComponent,
  ],
  imports: [MaterialModule, FlexLayoutModule],
  declarations: [SelectionTableComponent, FilterWrapperComponent],
})
export class SharedModule {}
