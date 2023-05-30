import { TestBed } from '@angular/core/testing';

import { InsquareService } from './insquare.service';

describe('InsquareService', () => {
  let service: InsquareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsquareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
