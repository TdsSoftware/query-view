import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

import { Parametros, Paginacao, Filtro, Ordenacao } from './data-view';

@Injectable({
  providedIn: 'root',
})
export class DataViewStateService {
  private params = new BehaviorSubject<Parametros>(null);
  params$ = this.params.asObservable();

  private pageIndex = new Subject<number>();
  pageIndex$ = this.pageIndex.asObservable();

  private pageSize = new BehaviorSubject<number>(null);
  pageSize$ = this.pageSize.asObservable();

  constructor() {}

  changeFilter(filter: Filtro) {
    const pagination = this.getFirstPage();
    this.pageIndex.next(0);

    this.params.next({ ...this.params.value, filter, pagination });
  }

  changeSearch(search: string) {
    const pagination = this.getFirstPage();
    this.pageIndex.next(0);

    this.params.next({ ...this.params.value, search, pagination });
  }

  changePagination(pagination: Paginacao) {
    this.pageIndex.next(pagination.pageIndex);

    this.params.next({ ...this.params.value, pagination });
  }

  changeSort(value: Ordenacao) {
    const sort = value.direction ? value : null;
    this.params.next({ ...this.params.value, sort });
  }

  changePageSize(pageSize: number) {
    this.changePagination({ pageIndex: 0, pageSize });
    this.pageSize.next(pageSize);
  }

  private getFirstPage() {
    return { ...this.params?.value?.pagination, pageIndex: 0 } as Paginacao;
  }
}
