import { TestBed } from '@angular/core/testing';

import { SzirineService } from './szirine.service';

describe('SzirineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SzirineService = TestBed.get(SzirineService);
    expect(service).toBeTruthy();
  });
});
