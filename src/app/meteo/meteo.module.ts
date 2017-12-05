import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MeteoComponent } from './meteo.component';
import { SearchComponent } from '../search/search.component';
import { RoutingModule } from '../routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { CelsiusPipe } from '../filters/celsius.pipe';
import { ToDatePipe } from '../filters/to-date.pipe';
import { MeteoCardComponent } from './meteo-card.component';
import { AgmCoreModule } from '@agm/core';
import { ChartComponent } from './chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [ 
    MeteoComponent,
    SearchComponent,
    CelsiusPipe,
    ToDatePipe,
    MeteoCardComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatGridListModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDTnWDJCT8x5DPjnZitiurzTb6HZ3Yf9bM'
    })
  ],
  providers:[],
  bootstrap:[MeteoComponent]
})

export class MeteoModule { 
  
}
