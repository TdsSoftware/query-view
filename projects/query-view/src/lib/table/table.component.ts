import { Component, OnInit, Input, Type, ViewChild } from '@angular/core';

import { RenderService, TableDirective } from 'core';

@Component({
  selector: 'tds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() table: Type<any>;

  @ViewChild(TableDirective, { static: true }) tableHost: TableDirective;

  constructor(private renderService: RenderService) {}

  ngOnInit(): void {
    this.renderService.create(this.table, this.tableHost.viewContainerRef);
  }
}
