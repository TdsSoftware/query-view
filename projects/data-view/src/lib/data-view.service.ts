import { Injectable } from '@angular/core';

import { Subject, Observable, BehaviorSubject, merge } from 'rxjs';
import { map, tap, switchMap, filter } from 'rxjs/operators';

import { DataViewStateService } from './data-view-state.service';
import { DataViewResult, Parametros, Ordenacao } from './data-view';

@Injectable()
export class DataViewService {
  private length = new Subject<number>();
  private refresh = new Subject<void>();
  private loading = new BehaviorSubject(true);

  length$ = this.length.asObservable();
  loading$ = this.loading.asObservable();

  constructor(private dataViewStateService: DataViewStateService) {}

  getData<T>(request: (params: Parametros) => Observable<DataViewResult<T>>) {
    const params$ = merge(this.dataViewStateService.params$, this.refresh).pipe(
      switchMap(() => this.dataViewStateService.params$),
      filter(Boolean)
    );

    const data$ = params$.pipe(
      tap(() => this.loading.next(true)),
      switchMap((params) => request(params))
    );

    return data$.pipe(
      tap((result) => this.length.next(result.length)),
      map((result) => result.data),
      tap(() => this.loading.next(false))
    );
  }

  refreshData() {
    this.refresh.next();
  }

  changeSort(value: Ordenacao) {
    this.dataViewStateService.changeSort(value);
  }
}
