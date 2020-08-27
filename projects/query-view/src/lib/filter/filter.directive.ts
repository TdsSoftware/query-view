import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tdsFilter]',
})
export class FilterDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
