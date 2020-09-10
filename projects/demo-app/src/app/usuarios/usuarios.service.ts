import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { Parametros, Data, Ordenacao } from 'query-view';

import { USUARIOS_MOCK_DATA } from './usuarios-mock-data';
import { Usuario } from './usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor() {}

  getAll(params: Parametros): Observable<Data<Usuario>> {
    return of(USUARIOS_MOCK_DATA).pipe(
      map((usuarios) => this.filtrar(usuarios, params?.pesquisa)),
      map((usuarios) => this.ordenar(usuarios, params?.ordenacao)),
      delay(500),
      map((dados) => ({ dados, registros: dados.length }))
    );
  }

  private filtrar(usuarios: Usuario[], search: string) {
    if (search == null) return usuarios;
    search = search.toLowerCase();

    return usuarios.filter(
      (u) =>
        u.username.toLowerCase().includes(search) ||
        u.email.toLowerCase().includes(search)
    );
  }

  private ordenar(usuarios: Usuario[], ordenacao: Partial<Ordenacao>) {
    if (ordenacao == null) return usuarios;

    const ordenado = [...usuarios];

    switch (ordenacao?.ativo) {
      case 'email':
        ordenado.sort((a, b) => (a.email > b.email ? 1 : -1));
        break;

      case 'username':
        ordenado.sort((a, b) => (a.username > b.username ? 1 : -1));
        break;

      default:
        break;
    }

    if (ordenacao?.direcao === 'desc') {
      ordenado.reverse();
    }

    return ordenado;
  }
}
