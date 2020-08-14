import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

import { Funcionario } from './funcionarios';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  constructor() {}

  getAll(): Observable<Funcionario[]> {
    return of([]);
  }
}
