import { TestBed } from '@angular/core/testing';

import { TipoContaService } from './tipo-conta.service';

describe('TipoContaService', () => {
  let service: TipoContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoContaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
