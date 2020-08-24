import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaQueryViewComponent } from './tabela-query-view.component';

describe('TabelaQueryViewComponent', () => {
  let component: TabelaQueryViewComponent;
  let fixture: ComponentFixture<TabelaQueryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaQueryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaQueryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
