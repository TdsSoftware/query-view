import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Parametros, DataViewResult } from 'data-view';

import { Funcionario } from './funcionarios';
import { FUNCIONARIOS_MOCK_DATA } from './funcionarios-mock-data';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  constructor() {}

  getAll(params?: Parametros): Observable<DataViewResult<Funcionario>> {
    // Pesquisa
    let searchedData = JSON.parse(
      JSON.stringify(FUNCIONARIOS_MOCK_DATA)
    ) as Funcionario[];

    if (params?.search) {
      const search = params.search.toLowerCase();
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

    switch (params?.sort?.active) {
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

    if (params?.sort?.direction === 'desc') {
      sortedData.reverse();
    }

    // Filter
    let filteredData = sortedData;

    if (params?.filter?.idadeMax) {
      filteredData = filteredData.filter(
        (p) => p.idade <= params.filter.idadeMax
      );
    }

    // Pagination
    const pageIndex = params?.pagination?.pageIndex || 0;
    const pageSize = params?.pagination?.pageSize || 50;

    const start = pageIndex * pageSize;
    const end = start + pageSize;

    return of(filteredData).pipe(
      delay(this.getRandomNumber(500, 1500)),
      map((data: any[]) => data.slice(start, end)),
      map((data) => ({ data, length: filteredData.length }))
    );
  }

  private getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
