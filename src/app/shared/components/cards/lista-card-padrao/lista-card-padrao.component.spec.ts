import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCardPadraoComponent } from './lista-card-padrao.component';

describe('ListaCardPadraoComponent', () => {
  let component: ListaCardPadraoComponent;
  let fixture: ComponentFixture<ListaCardPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCardPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCardPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
