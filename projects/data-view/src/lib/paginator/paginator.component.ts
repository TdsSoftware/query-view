import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Observable } from 'rxjs';

import { DataViewStateService } from '../data-view-state.service';
import { Paginacao } from '../data-view';

@Component({
  selector: 'tds-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  length$: Observable<number>;
  pageIndex$: Observable<number>;
  pageSize$: Observable<number>;

  constructor(private stateService: DataViewStateService) {}

  ngOnInit(): void {
    this.pageSize$ = this.stateService.pageSize$;
    this.length$ = this.stateService.length$;
    this.pageIndex$ = this.stateService.pageIndex$;
  }

  onPage(event: PageEvent) {
    const paginacao: Paginacao = {
      pageIndex: event.pageIndex,
      pageSize: event.pageSize,
    };

    this.stateService.changePagination(paginacao);
  }
}
