import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Data, Parametros } from 'core';

import { USUARIOS_MOCK_DATA } from './usuarios-mock-data';
import { Usuario } from './usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor() {}

  getAll(params: Parametros): Observable<Data<Usuario>> {
    return of(USUARIOS_MOCK_DATA).pipe(
      map((usuarios) => this.filtrarUsuarios(usuarios, params?.pesquisa)),
      delay(500),
      map((dados) => ({ dados, registros: dados.length }))
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
