import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Observable } from 'rxjs';

import { DataViewStateService } from '../data-view-state.service';
import { DataViewService } from '../data-view.service';

@Component({
  selector: 'tds-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  length$: Observable<number>;
  pageIndex$: Observable<number>;
  pageSize$: Observable<number>;

  constructor(
    private stateService: DataViewStateService,
    private dataService: DataViewService
  ) {}

  ngOnInit(): void {
    this.pageSize$ = this.stateService.pageSize$;
    this.pageIndex$ = this.stateService.pageIndex$;
    this.length$ = this.dataService.length$;
  }

  onPage(event: PageEvent) {
    this.stateService.changePagination({
      pageIndex: event.pageIndex,
      pageSize: event.pageSize,
    });
  }
}
