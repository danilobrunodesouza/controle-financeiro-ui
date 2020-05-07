import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDeLinhaComponent } from './grafico-de-linha.component';

describe('GraficoDeLinhaComponent', () => {
  let component: GraficoDeLinhaComponent;
  let fixture: ComponentFixture<GraficoDeLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDeLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDeLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
