import { TestBed } from '@angular/core/testing';

import { Trends } from './trends';

describe('Trends', () => {
  let service: Trends;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Trends);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
