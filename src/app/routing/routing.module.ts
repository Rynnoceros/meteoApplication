import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoComponent } from '../meteo/meteo.component';

const ROUTES : Routes = [
  {
    path:'meteo',
    component:MeteoComponent
  },
  {
    path:'',
    redirectTo:'meteo',
    pathMatch:'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})

export class RoutingModule { }
