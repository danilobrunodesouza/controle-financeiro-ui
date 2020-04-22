import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaFormularioComponent } from './subcategoria-formulario.component';

describe('SubcategoriaFormularioComponent', () => {
  let component: SubcategoriaFormularioComponent;
  let fixture: ComponentFixture<SubcategoriaFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriaFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
