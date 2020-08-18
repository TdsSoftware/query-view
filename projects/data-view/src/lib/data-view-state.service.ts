import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap, map, merge } from 'rxjs/operators';

import {
  Parametros,
  Paginacao,
  Filtro,
  Ordenacao,
  DataViewResult,
} from './data-view';

@Injectable({
  providedIn: 'root',
})
export class DataViewStateService {
  private length = new Subject<number>();
  private pageIndex = new Subject<number>();
  private loading = new BehaviorSubject(true);
  private refresh = new Subject<void>();
  private pageSize = new BehaviorSubject<number>(null);
  private filterOpened = new BehaviorSubject(false);
  private params = new BehaviorSubject<Parametros>({
    pagination: { pageIndex: 0, pageSize: null },
  });

  length$ = this.length.asObservable();
  pageIndex$ = this.pageIndex.asObservable();
  loading$ = this.loading.asObservable();
  refresh$ = this.refresh.asObservable();
  pageSize$ = this.pageSize.asObservable();
  filterOpened$ = this.filterOpened.asObservable();
  params$ = this.params.asObservable();

  constructor() {}

  getData<T>(request: (params: Parametros) => Observable<DataViewResult<T>>) {
    return this.params$.pipe(
      merge(this.refresh$),
      map(() => this.params.value),
      tap(() => this.loading.next(true)),
      switchMap((params) => request(params)),
      tap((result) => this.changeLength(result.length)),
      map((result) => result.data),
      tap(() => this.loading.next(false))
    );
  }

  changePagination(pagination: Paginacao) {
    this.params.next({ ...this.params.value, pagination });
    this.pageIndex.next(pagination.pageIndex);
  }

  changeFilter(filter: Filtro) {
    const pageIndex = 0;
    const current = { ...this.params?.value?.pagination };
    const pagination = { ...current, pageIndex } as Paginacao;
    this.params.next({ ...this.params.value, filter, pagination });
    this.pageIndex.next(pageIndex);
  }

  changeSearch(search: string) {
    const pageIndex = 0;
    const current = { ...this.params?.value?.pagination };
    const pagination = { ...current, pageIndex } as Paginacao;
    this.params.next({ ...this.params.value, search, pagination });
    this.pageIndex.next(pageIndex);
  }

  changeSort(value: Ordenacao) {
    const sort = value.direction ? value : null;
    this.params.next({ ...this.params.value, sort });
  }

  changeLength(value: number) {
    this.length.next(value);
  }

  changePageSize(pageSize: number) {
    this.pageSize.next(pageSize);
    const pagination = this.params.value.pagination;
    this.changePagination({ ...pagination, pageSize });
  }

  refreshData() {
    this.refresh.next();
  }

  toggleFilter() {
    this.filterOpened.next(!this.filterOpened.value);
  }

  openFilter() {
    this.filterOpened.next(true);
  }

  closeFilter() {
    this.filterOpened.next(false);
  }
}
