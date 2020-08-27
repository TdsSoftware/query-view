import { Component, OnInit, Input, Type, ViewChild } from '@angular/core';

import { TableDirective } from './table.directive';
import { RenderService } from '../render.service';

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
