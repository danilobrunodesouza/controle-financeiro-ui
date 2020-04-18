import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalendarPadraoComponent } from './input-calendar-padrao.component';

describe('InputCalendarPadraoComponent', () => {
  let component: InputCalendarPadraoComponent;
  let fixture: ComponentFixture<InputCalendarPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCalendarPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCalendarPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
