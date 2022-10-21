import { TestBed } from '@angular/core/testing';

import { FlightDataServiceService } from './flight-data-service.service';

describe('FlightDataServiceService', () => {
  let service: FlightDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
