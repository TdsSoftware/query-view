import { Component, OnInit, Input, Type } from '@angular/core';

import { QueryViewService } from '../query-view.service';
import { FilterService } from '../filter/filter.service';

@Component({
  selector: 'tds-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.scss'],
})
export class QueryViewComponent implements OnInit {
  @Input() title: string = '';
  @Input() table: Type<any>;
  @Input() filter: Type<any>;
  @Input() margin: string;
  @Input() elevation: number;

  loading$ = this.queryViewService.loading$;
  filter$ = this.filterService.filter$;

  constructor(
    private queryViewService: QueryViewService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {}

  getElevation() {
    return this.margin ? `mat-elevation-z${this.elevation}` : null;
  }

  close() {
    this.filterService.fechar();
  }
}
