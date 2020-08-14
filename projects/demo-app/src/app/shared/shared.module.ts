import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataViewModule } from 'data-view';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MaterialModule, DataViewModule],
})
export class SharedModule {}
