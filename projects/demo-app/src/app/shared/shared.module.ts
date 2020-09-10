import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { SelectionTableComponent } from './selection-table/selection-table.component';

@NgModule({
  exports: [MaterialModule, FlexLayoutModule, SelectionTableComponent],
  imports: [MaterialModule],
  declarations: [SelectionTableComponent],
})
export class SharedModule {}
