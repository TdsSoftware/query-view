import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Parametros, DataViewResult } from 'data-view';

import { Cliente } from './clientes';
import { CLIENTES_MOCK_DATA } from './clientes-mock-data';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor() {}

  getDepartamentos() {
    return [...new Set(CLIENTES_MOCK_DATA.map((x) => x.departamento))].sort();
  }

  getPaises() {
    return [...new Set(CLIENTES_MOCK_DATA.map((x) => x.pais))].sort();
  }

  getMoedas() {
    return [...new Set(CLIENTES_MOCK_DATA.map((x) => x.moeda))].sort();
  }

  getAll(params?: Parametros): Observable<DataViewResult<Cliente>> {
    // Pesquisa
    let searchedData = JSON.parse(
      JSON.stringify(CLIENTES_MOCK_DATA)
    ) as Cliente[];

    if (params?.search) {
      const search = params.search.toLowerCase();
      searchedData = searchedData.filter(
        (cliente) =>
          cliente.id.toString().includes(search) ||
          cliente.empresa.toLowerCase().includes(search)
      );
    }

    // Sort
    let sortedData = searchedData;

    switch (params?.sort?.active) {
      case 'id':
        sortedData.sort((a, b) => a.id - b.id);
        break;

      case 'empresa':
        sortedData.sort((a, b) => (a.empresa > b.empresa ? 1 : -1));
        break;

      case 'pais':
        sortedData.sort((a, b) => (a.pais > b.pais ? 1 : -1));
        break;

      case 'departamento':
        sortedData.sort((a, b) => (a.departamento > b.departamento ? 1 : -1));
        break;

      default:
        break;
    }

    if (params?.sort?.direction === 'desc') {
      sortedData.reverse();
    }

    // Filter
    let filteredData = sortedData;

    if (params?.filter?.departamento) {
      filteredData = filteredData.filter(
        (c) => c.departamento == params.filter.departamento
      );
    }

    if (params?.filter?.pais) {
      filteredData = filteredData.filter((c) => c.pais == params.filter.pais);
    }

    if (params?.filter?.moeda) {
      filteredData = filteredData.filter((c) => c.moeda == params.filter.moeda);
    }

    // Pagination
    const pageIndex = params?.pagination?.pageIndex || 0;
    const pageSize = params?.pagination?.pageSize || 50;

    const start = pageIndex * pageSize;
    const end = start + pageSize;

    return of(filteredData).pipe(
      delay(500),
      map((data: any[]) => data.slice(start, end)),
      map((data) => ({ data, length: filteredData.length }))
    );
  }
}
