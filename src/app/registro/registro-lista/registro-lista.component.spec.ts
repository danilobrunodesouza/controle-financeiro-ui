import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroListaComponent } from './registro-lista.component';

describe('RegistroListaComponent', () => {
  let component: RegistroListaComponent;
  let fixture: ComponentFixture<RegistroListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
