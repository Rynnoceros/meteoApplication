import { Injectable } from '@angular/core';
import { City } from './city';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CityService {

  private citiesListUrl = 'assets/data/city.list.json';

  constructor(private _http: Http) { }

  getCitiesList(): Promise<City[]> {
    return this._http.get(this.citiesListUrl)
                     .toPromise()
                     .then(response => (response.json() as City[]).sort((a,b) => {
                        return a.name.localeCompare(b.name);
                     }))
                     .catch(this.errorHandler)
  }

  errorHandler(error:any) {
    console.log('error : ' + (error.message || error));
    return Promise.reject(error.message || error);
  }

}
