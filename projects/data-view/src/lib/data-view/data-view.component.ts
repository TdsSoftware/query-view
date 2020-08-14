import { Component, OnInit, Input, Type } from '@angular/core';

@Component({
  selector: 'tds-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
})
export class DataViewComponent implements OnInit {
  @Input() table: Type<any>;
  @Input() filter: Type<any>;

  constructor() {}

  ngOnInit(): void {}
}
