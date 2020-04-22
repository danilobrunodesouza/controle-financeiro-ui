import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaListaComponent } from './subcategoria-lista.component';

describe('SubcategoriaListaComponent', () => {
  let component: SubcategoriaListaComponent;
  let fixture: ComponentFixture<SubcategoriaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
