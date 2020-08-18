import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { DataViewResult } from 'data-view';

import { USUARIOS_MOCK_DATA } from './usuarios-mock-data';
import { Usuario } from './usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor() {}

  getAll(): Observable<DataViewResult<Usuario>> {
    return of(USUARIOS_MOCK_DATA).pipe(
      delay(100),
      map((usuarios) => ({
        data: usuarios,
        length: usuarios.length,
      }))
    );
  }
}
