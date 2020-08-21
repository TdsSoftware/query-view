import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueryViewComponent } from './query-view/query-view.component';

const routes: Routes = [
  {
    path: '',
    component: QueryViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionariosRoutingModule {}
