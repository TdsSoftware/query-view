import {
  Injectable,
  ComponentFactoryResolver,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RenderService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  create(component: Type<any>, viewContainerRef: ViewContainerRef) {
    viewContainerRef.clear();
    if (!component) return;
    viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(component)
    );
  }
}
