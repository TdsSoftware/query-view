import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Paginacao, Filtro, Parametros, Ordenacao, Data } from 'core';
import { tap, switchMap, startWith } from 'rxjs/operators';

@Injectable()
export class QueryViewService {
  private parametros = new BehaviorSubject<Parametros>(null);
  parametros$ = this.parametros.asObservable();
  private loading = new BehaviorSubject<boolean>(true);
  loading$ = this.loading.asObservable();

  constructor() {}

  dataSource$<T>(fnLoad: (param: Parametros) => Observable<Data<T>>) {
    return this.parametros$.pipe(
      tap(() => this.loading.next(true)),
      switchMap((parametros) => fnLoad(parametros)),
      tap(() => this.loading.next(false)),
      startWith({ dados: null, registros: 0 })
    );
  }

  paginar(paginacao: Paginacao) {
    this.parametros.next({ ...this.parametros.value, paginacao });
  }

  ordenar(ordenacao: Ordenacao) {
    this.parametros.next({ ...this.parametros.value, ordenacao });
  }

  filtrar(filtro: Filtro) {
    const paginacao = this.primeiraPagina();
    this.parametros.next({ ...this.parametros.value, filtro, paginacao });
  }

  pesquisar(pesquisa: string) {
    const paginacao = this.primeiraPagina();
    this.parametros.next({ ...this.parametros.value, pesquisa, paginacao });
  }

  private primeiraPagina() {
    return { ...this.parametros?.value?.paginacao, pagina: 0 } as Paginacao;
  }
}
