import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAreaPolarComponent } from './grafico-area-polar.component';

describe('GraficoAreaPolarComponent', () => {
  let component: GraficoAreaPolarComponent;
  let fixture: ComponentFixture<GraficoAreaPolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoAreaPolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoAreaPolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
