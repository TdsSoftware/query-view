import { Component, OnInit, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MediaObserver } from '@angular/flex-layout';

import { Subscription } from 'rxjs';

import { DataViewInterfaceService } from '../data-view-interface.service';

@Component({
  selector: 'tds-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss'],
})
export class FilterButtonsComponent implements OnInit {
  @Input() ngForm: FormGroupDirective;

  subscription = new Subscription();
  initialValue: any;

  constructor(
    private interfaceService: DataViewInterfaceService,
    private mediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    this.initialValue = this.ngForm.control.value;

    const submit = this.ngForm.ngSubmit.subscribe(() => this.onSubmit());
    this.subscription.add(submit);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    this.interfaceService.closeFilter();
  }

  reset() {
    this.ngForm.control.setValue(this.initialValue);
    this.ngForm.ngSubmit.emit();
  }

  onSubmit() {
    this.mediaObserver.isActive(['xs', 'sm'])
      ? this.interfaceService.closeFilter()
      : null;
  }
}
