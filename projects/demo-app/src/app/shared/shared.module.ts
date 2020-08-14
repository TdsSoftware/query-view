import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { DataViewModule } from 'data-view';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MaterialModule, FlexLayoutModule, DataViewModule],
})
export class SharedModule {}
