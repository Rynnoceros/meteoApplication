import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Meteo } from './meteo';
import { Forecast } from './forecast';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MeteoService {

  private headers = new Headers ({'Content-Type':'application/json'});
  private key = "&APPID=64d0c638ef419010ed6f10e23348345b";
  private meteoByIdUrl = "https://api.openweathermap.org/data/2.5/weather?id=";
  private meteoByCityNameUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  private meteo5daysByCityNameUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";

  constructor(private _http: Http) { }

  getMeteoJourById(id:number): Promise<Meteo> {
    return this._http.get(`${this.meteoByIdUrl}${id}${this.key}`)
                     .toPromise()
                     .then(response => response.json() as Meteo)
                     .catch(this.errorHandler);
  }

  getMeteoJourByCityName(name: string) {
    return this._http.get(`${this.meteoByCityNameUrl}${name}${this.key}`)
                     .toPromise()
                     .then(response => response.json() as Meteo)
                     .catch(this.errorHandler);
  }

  getMeteo5JoursByCityName(name: string) {
    return this._http.get(`${this.meteo5daysByCityNameUrl}${name}${this.key}`)
                     .toPromise()
                     .then(response => response.json() as Forecast)
                     .catch(this.errorHandler);
  }

  private errorHandler(error:any) {
    console.log('error : ' + error.message);
    return Promise.reject(error.message || error);
  }
}
