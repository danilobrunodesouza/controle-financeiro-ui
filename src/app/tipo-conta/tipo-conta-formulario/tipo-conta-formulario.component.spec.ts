import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContaFormularioComponent } from './tipo-conta-formulario.component';

describe('TipoContaFormularioComponent', () => {
  let component: TipoContaFormularioComponent;
  let fixture: ComponentFixture<TipoContaFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoContaFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoContaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
