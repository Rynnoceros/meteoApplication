import { ForecastMeteo } from './forecast-meteo';
import { City } from '../city/city';

export class Forecast {
    cod:string;
    message:number;
    cnt:number;
    list:ForecastMeteo[];
    city:City;
}


