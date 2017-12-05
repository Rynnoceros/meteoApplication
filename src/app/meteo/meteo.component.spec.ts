import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoComponent } from './meteo.component';
import { SearchComponent } from '../search/search.component';
import { MeteoCardComponent } from './meteo-card.component';
import { AgmCoreModule } from '@agm/core';
import { MatTabsModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelsiusPipe } from '../filters/celsius.pipe';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('MeteoComponent', () => {
  let component: MeteoComponent;
  let fixture: ComponentFixture<MeteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ 
        MatTabsModule, 
        MatAutocompleteModule, 
        FormsModule, 
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpModule,
        AgmCoreModule.forRoot({
          apiKey:'AIzaSyDTnWDJCT8x5DPjnZitiurzTb6HZ3Yf9bM'
        })
      ],
      declarations: [ MeteoComponent, SearchComponent, MeteoCardComponent, CelsiusPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
