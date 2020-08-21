import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tdsTable]',
})
export class TableDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
