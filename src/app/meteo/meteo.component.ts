import { Component, OnInit } from '@angular/core';
import { Meteo } from './meteo';
import { Forecast } from './forecast';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
  providers: [MeteoService]
})
export class MeteoComponent implements OnInit {

  private meteoJour:Meteo;
  private meteo5Jours:Forecast;

  constructor(private _meteoService: MeteoService) { 
  }

  ngOnInit() {
    this._meteoService.getMeteoJourById(6440000).then(meteo => this.meteoJour = meteo);
    this._meteoService.getMeteo5JoursByCityName('Clermont-Ferrand').then(meteos => this.meteo5Jours = meteos);
  }

  refreshMeteoDatas(event){
    this._meteoService.getMeteoJourByCityName(event).then(meteo => this.meteoJour = meteo);
    this._meteoService.getMeteo5JoursByCityName(event).then(meteos => this.meteo5Jours = meteos);
  }
}
