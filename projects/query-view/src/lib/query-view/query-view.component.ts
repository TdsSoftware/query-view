import {
  Component,
  Input,
  Type,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { MatDrawerContainer } from '@angular/material/sidenav';

import { QueryViewService } from '../query-view.service';
import { FilterService } from '../filter/filter.service';

@Component({
  selector: 'tds-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.scss'],
  providers: [FilterService],
})
export class QueryViewComponent implements AfterViewInit {
  @Input() titulo: string = '';
  @Input() tabela: Type<any>;
  @Input() filtro: Type<any>;
  @Input() margem: string;
  @Input() elevacao: number;
  @Input() search: boolean = true;

  @ViewChild(MatDrawerContainer, { read: ElementRef })
  matDrawerContent: ElementRef;

  loading$ = this.queryViewService.loading$;
  filter$ = this.filterService.filter$;
  minWidth: string = '300px';

  constructor(
    private queryViewService: QueryViewService,
    private filterService: FilterService
  ) {}

  ngAfterViewInit() {
    setTimeout(() => this.onResize(), 10);
  }

  onResize() {
    const width: number = this.matDrawerContent.nativeElement.clientWidth;
    const fullscreen = width <= 750;

    this.minWidth = fullscreen ? '100%' : '300px';
    this.filterService.setFullscreen(fullscreen);
  }

  close() {
    this.filterService.fechar();
  }

  getElevation() {
    return this.margem ? `mat-elevation-z${this.elevacao}` : null;
  }
}
