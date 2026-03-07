import { TestBed } from '@angular/core/testing';

import { AutoCareCenter } from './auto-care-center';

describe('AutoCareCenter', () => {
  let service: AutoCareCenter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoCareCenter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
