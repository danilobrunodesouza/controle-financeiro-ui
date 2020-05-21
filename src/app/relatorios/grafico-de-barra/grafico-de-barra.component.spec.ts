import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDeBarraComponent } from './grafico-de-barra.component';

describe('GraficoDeBarraComponent', () => {
  let component: GraficoDeBarraComponent;
  let fixture: ComponentFixture<GraficoDeBarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDeBarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDeBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
