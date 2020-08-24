import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Parametros, Data } from 'core';

import { Funcionario } from './funcionarios';
import { FUNCIONARIOS_MOCK_DATA } from './funcionarios-mock-data';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  constructor() {}

  getAll(params?: Parametros): Observable<Data<Funcionario>> {
    // Pesquisa
    let searchedData = JSON.parse(
      JSON.stringify(FUNCIONARIOS_MOCK_DATA)
    ) as Funcionario[];

    if (params?.pesquisa) {
      const search = params.pesquisa.toLowerCase();
      searchedData = searchedData.filter(
        (funcionario) =>
          funcionario.email.toLowerCase().includes(search) ||
          funcionario.nome.toLowerCase().includes(search) ||
          funcionario.sobrenome.toLowerCase().includes(search) ||
          funcionario.empresa.toLowerCase().includes(search)
      );
    }

    // Sort
    let sortedData = searchedData;

    switch (params?.ordenacao?.ativo) {
      case 'id':
        sortedData.sort((a, b) => a.id - b.id);
        break;

      case 'nome':
        sortedData.sort((a, b) => (a.nome > b.nome ? 1 : -1));
        break;

      case 'sobrenome':
        sortedData.sort((a, b) => (a.sobrenome > b.sobrenome ? 1 : -1));
        break;

      case 'idade':
        sortedData.sort((a, b) => a.idade - b.idade);
        break;

      case 'empresa':
        sortedData.sort((a, b) => (a.empresa > b.empresa ? 1 : -1));
        break;

      case 'email':
        sortedData.sort((a, b) => (a.email > b.email ? 1 : -1));
        break;

      default:
        break;
    }

    if (params?.ordenacao?.direcao === 'desc') {
      sortedData.reverse();
    }

    // Filter
    let filteredData = sortedData;

    if (params?.filtro?.idadeMax) {
      filteredData = filteredData.filter(
        (p) => p.idade <= params.filtro.idadeMax
      );
    }

    // Pagination
    const pageIndex = params?.paginacao?.pagina || 0;
    const pageSize = params?.paginacao?.tamanho || 50;

    const start = pageIndex * pageSize;
    const end = start + pageSize;

    return of(filteredData).pipe(
      delay(this.getRandomNumber(500, 1500)),
      map((data: any[]) => data.slice(start, end)),
      map(
        (dados) =>
          ({ dados, registros: filteredData.length } as Data<Funcionario>)
      )
    );
  }

  private getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
