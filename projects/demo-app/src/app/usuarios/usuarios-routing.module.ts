import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataViewComponent } from '../usuarios/data-view/data-view.component';

const routes: Routes = [
  {
    component: DataViewComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
