import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionariosModule } from './funcionarios/funcionarios.module';

const routes: Routes = [
  {
    path: 'funcionarios',
    loadChildren: () => FuncionariosModule,
  },
  {
    path: '**',
    redirectTo: '/funcionarios',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
