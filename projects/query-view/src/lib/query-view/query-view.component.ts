import { Component, OnInit, Input, Type } from '@angular/core';

@Component({
  selector: 'tds-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.scss'],
})
export class QueryViewComponent implements OnInit {
  @Input() title: string = '';
  @Input() table: Type<any>;
  @Input() filter: Type<any>;

  constructor() {}

  ngOnInit(): void {}
}
