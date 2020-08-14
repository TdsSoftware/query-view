import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { DataViewStateService } from '../data-view-state.service';

@Component({
  selector: 'tds-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string;

  @ViewChild('input', { static: true, read: ElementRef }) input: ElementRef;

  pesquisa = new FormControl();
  subscriptions = new Subscription();

  constructor(private stateService: DataViewStateService) {}

  ngOnInit(): void {
    this.listenToSearch();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  listenToSearch() {
    const sub = this.pesquisa.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => this.stateService.changeSearch(value));

    this.subscriptions.add(sub);
  }

  focus() {
    this.input.nativeElement.focus();
  }

  clear() {
    this.pesquisa.setValue(null, { emitEvent: false });
    this.stateService.changeSearch(null);
  }
}
