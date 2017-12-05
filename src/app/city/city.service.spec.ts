import { TestBed, inject } from '@angular/core/testing';

import { CityService } from './city.service';
import { HttpModule } from '@angular/http';

describe('CityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule,
      ],
      providers: [CityService]
    });
  });

  it('should be created', inject([CityService], (service: CityService) => {
    expect(service).toBeTruthy();
  }));
});
