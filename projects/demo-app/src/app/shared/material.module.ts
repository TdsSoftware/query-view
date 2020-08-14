import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  exports: [MatTableModule, MatSortModule, MatSliderModule, MatDividerModule],
})
export class MaterialModule {}
