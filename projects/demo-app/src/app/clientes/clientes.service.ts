import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Data, Parametros } from 'core';

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

  getAll(params?: Parametros): Observable<Data<Cliente>> {
    // Pesquisa
    let searchedData = JSON.parse(
      JSON.stringify(CLIENTES_MOCK_DATA)
    ) as Cliente[];

    if (params?.pesquisa) {
      const search = params.pesquisa.toLowerCase();
      searchedData = searchedData.filter(
        (cliente) =>
          cliente.id.toString().includes(search) ||
          cliente.empresa.toLowerCase().includes(search)
      );
    }

    // Sort
    let sortedData = searchedData;

    switch (params?.ordenacao?.ativo) {
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

    if (params?.ordenacao?.direcao === 'desc') {
      sortedData.reverse();
    }

    // Filter
    let filteredData = sortedData;

    if (params?.filtro?.departamento) {
      filteredData = filteredData.filter(
        (c) => c.departamento == params.filtro.departamento
      );
    }

    if (params?.filtro?.pais) {
      filteredData = filteredData.filter((c) => c.pais == params.filtro.pais);
    }

    if (params?.filtro?.moeda) {
      filteredData = filteredData.filter((c) => c.moeda == params.filtro.moeda);
    }

    // Pagination
    const pageIndex = params?.paginacao?.pagina || 0;
    const pageSize = params?.paginacao?.tamanho || 50;

    const start = pageIndex * pageSize;
    const end = start + pageSize;

    return of(filteredData).pipe(
      delay(500),
      map((data: any[]) => data.slice(start, end)),
      map((dados) => ({ dados, registros: filteredData.length }))
    );
  }
}
