import { TestBed } from '@angular/core/testing';

import { CoresEmHexaService } from './cores-em-hexa.service';

describe('CoresEmHexaService', () => {
  let service: CoresEmHexaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoresEmHexaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
