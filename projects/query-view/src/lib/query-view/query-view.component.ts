import { Component, Input, Type, ViewChild, ElementRef } from '@angular/core';
import { MatDrawerContainer, MatDrawerMode } from '@angular/material/sidenav';

import { QueryViewService } from '../query-view.service';
import { FilterService } from '../filter/filter.service';

@Component({
  selector: 'tds-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.scss'],
})
export class QueryViewComponent {
  @Input() titulo: string = '';
  @Input() tabela: Type<any>;
  @Input() filtro: Type<any>;
  @Input() margem: string;
  @Input() elevacao: number;
  @Input() search: boolean = true;

  @ViewChild(MatDrawerContainer, { read: ElementRef })
  matDrawerContainer: ElementRef;

  loading$ = this.queryViewService.loading$;
  filter$ = this.filterService.filter$;

  mode: MatDrawerMode = 'side';

  constructor(
    private queryViewService: QueryViewService,
    private filterService: FilterService
  ) {}

  ngDoCheck() {
    this.mode =
      this.matDrawerContainer?.nativeElement.clientWidth < 960
        ? 'over'
        : 'side';
  }

  getElevation() {
    return this.margem ? `mat-elevation-z${this.elevacao}` : null;
  }

  close() {
    this.filterService.fechar();
  }
}
