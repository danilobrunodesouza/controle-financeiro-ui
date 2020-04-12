import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextPadraoComponent } from './input-text-padrao.component';

describe('InputTextPadraoComponent', () => {
  let component: InputTextPadraoComponent;
  let fixture: ComponentFixture<InputTextPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
