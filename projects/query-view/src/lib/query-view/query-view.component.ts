import { Component, OnInit, Input, Type } from '@angular/core';
import { of } from 'rxjs';

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
  @Input() loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getElevation() {
    return this.margin ? `mat-elevation-z${this.elevation}` : null;
  }

  close() {}

  filterMode$ = of('side');
  filterOpened$ = of(false);
}
