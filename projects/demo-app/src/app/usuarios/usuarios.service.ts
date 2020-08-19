import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { DataViewResult, Parametros } from 'data-view';

import { USUARIOS_MOCK_DATA } from './usuarios-mock-data';
import { Usuario } from './usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor() {}

  getAll(params: Parametros): Observable<DataViewResult<Usuario>> {
    return of(USUARIOS_MOCK_DATA).pipe(
      map((usuarios) => this.filtrarUsuarios(usuarios, params?.search)),
      delay(500),
      map((data) => ({ data, length: data.length }))
    );
  }

  private filtrarUsuarios(usuarios: Usuario[], search: string) {
    if (search == null) return usuarios;
    search = search.toLowerCase();

    return usuarios.filter(
      (u) =>
        u.username.toLowerCase().includes(search) ||
        u.email.toLowerCase().includes(search)
    );
  }
}
