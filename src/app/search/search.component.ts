import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { CityService } from '../city/city.service';
import { City } from '../city/city';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

// const CITIES = [
//   {name:'Clermont-Ferrand',postal:63000,flag:"https://lipis.github.io/flag-icon-css/flags/4x3/fr.svg"},
//   {name:'Paris',postal:75000,flag:"https://lipis.github.io/flag-icon-css/flags/4x3/fr.svg"},
//   {name:'Toulouse',postal:31000,flag:"https://lipis.github.io/flag-icon-css/flags/4x3/fr.svg"}
// ]

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  outputs:['cityChange'],
  providers:[CityService]
})

export class SearchComponent implements OnInit {

  flagUrl="https://lipis.github.io/flag-icon-css/flags/4x3/";
  cities: City[];
  cityCtrl:FormControl;
  filteredCities: Observable<any[]>;
  cityChange = new EventEmitter();

  constructor(private _cityService: CityService) { 
    this.cityCtrl = new FormControl();
    this.filteredCities = this.cityCtrl.valueChanges
                              .startWith(null)
                              .map(city => {
                                console.log("city:"+city);
                                return (city && city.trim() !== '') ? this.filterCities(city) : (this.cities ? this.cities.slice(0,5) : []);
                              });
  }

  ngOnInit() {
    this._cityService.getCitiesList().then(cities => {
      this.cities = cities;
    });
  }

  filterCities(any:string) {
    return this.cities.filter(city => city.name.toLowerCase().indexOf(any.toLowerCase()) === 0).slice(0,5);
  }

  onclick(city:any) {
    this.cityChange.emit(city.name);
  }
}
