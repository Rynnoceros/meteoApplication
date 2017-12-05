import { TestBed, inject } from '@angular/core/testing';

import { MeteoService } from './meteo.service';
import { HttpModule } from '@angular/http';

describe('MeteoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule,
      ],
      providers: [MeteoService]
    });
  });

  it('should be created', inject([MeteoService], (service: MeteoService) => {
    expect(service).toBeTruthy();
  }));
});
