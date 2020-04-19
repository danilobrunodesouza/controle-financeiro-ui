import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDropdownPadraoComponent } from './input-dropdown-padrao.component';

describe('InputDropdownPadraoComponent', () => {
  let component: InputDropdownPadraoComponent;
  let fixture: ComponentFixture<InputDropdownPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDropdownPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDropdownPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
