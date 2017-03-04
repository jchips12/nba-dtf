import { TestBed, inject } from '@angular/core/testing';

import { DailyLeadersService } from './daily-leaders.service';

describe('DailyLeadersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyLeadersService]
    });
  });

  it('should ...', inject([DailyLeadersService], (service: DailyLeadersService) => {
    expect(service).toBeTruthy();
  }));
});
