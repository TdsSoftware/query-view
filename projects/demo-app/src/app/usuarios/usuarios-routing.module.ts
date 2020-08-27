import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueryViewComponent } from '../usuarios/query-view/query-view.component';

const routes: Routes = [
  {
    component: QueryViewComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
