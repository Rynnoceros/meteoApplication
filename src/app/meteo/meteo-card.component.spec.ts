import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoCardComponent } from './meteo-card.component';
import { MatGridListModule } from '@angular/material';
import { CelsiusPipe } from '../filters/celsius.pipe';

describe('MeteoCardComponent', () => {
  let component: MeteoCardComponent;
  let fixture: ComponentFixture<MeteoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatGridListModule],
      declarations: [ MeteoCardComponent, CelsiusPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
