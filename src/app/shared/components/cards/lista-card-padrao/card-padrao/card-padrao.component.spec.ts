import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPadraoComponent } from './card-padrao.component';

describe('CardPadraoComponent', () => {
  let component: CardPadraoComponent;
  let fixture: ComponentFixture<CardPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
