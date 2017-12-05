import { Component, OnInit } from '@angular/core';
import { Meteo } from './meteo';
import { ForecastMeteo } from './forecast-meteo';

@Component({
  selector: 'app-meteo-card',
  templateUrl: './meteo-card.component.html',
  styleUrls: ['./meteo-card.component.css'],
  inputs:['meteo','forecast']
})
export class MeteoCardComponent implements OnInit {

  meteo:Meteo;
  forecast:ForecastMeteo;

  constructor() { }

  ngOnInit() {
  }

}
