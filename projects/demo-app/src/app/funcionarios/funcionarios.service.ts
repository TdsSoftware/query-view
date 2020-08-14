import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

import { Funcionario } from './funcionarios';
import { FUNCIONARIOS_DATA } from './funcionarios.data';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  constructor() {}

  getAll(): Observable<Funcionario[]> {
    return of(FUNCIONARIOS_DATA);
  }
}
