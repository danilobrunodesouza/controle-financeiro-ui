import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRapidoComponent } from './formulario-rapido.component';

describe('FormularioRapidoComponent', () => {
  let component: FormularioRapidoComponent;
  let fixture: ComponentFixture<FormularioRapidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRapidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
