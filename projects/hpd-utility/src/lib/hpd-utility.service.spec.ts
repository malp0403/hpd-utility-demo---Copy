import { TestBed } from '@angular/core/testing';

import { HpdUtilityService } from './hpd-utility.service';

describe('HpdUtilityService', () => {
  let service: HpdUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpdUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
