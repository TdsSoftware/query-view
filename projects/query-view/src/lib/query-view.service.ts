import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Paginacao, Filtro, Parametros, Ordenacao } from 'core';

@Injectable()
export class QueryViewService {
  private parametros = new BehaviorSubject<Parametros>(null);
  parametros$ = this.parametros.asObservable();
  constructor() {}

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
