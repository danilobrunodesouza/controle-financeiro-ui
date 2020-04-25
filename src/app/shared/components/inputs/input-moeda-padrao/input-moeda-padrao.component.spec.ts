import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMoedaPadraoComponent } from './input-moeda-padrao.component';

describe('InputMoedaPadraoComponent', () => {
  let component: InputMoedaPadraoComponent;
  let fixture: ComponentFixture<InputMoedaPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMoedaPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMoedaPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
