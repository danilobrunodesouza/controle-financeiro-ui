import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContaListaComponent } from './tipo-conta-lista.component';

describe('TipoContaListaComponent', () => {
  let component: TipoContaListaComponent;
  let fixture: ComponentFixture<TipoContaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoContaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoContaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
