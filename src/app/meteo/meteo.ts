import { Weather } from './weather';
import { Temperature } from './temperature';

export class Meteo {
    coord:{
        lon:number;
        lat:number;
    };
    weather: Weather[];
    base:string;
    main:Temperature; 
    visibility:number;
    wind: {
        speed:number;
        deg:number;
    };
    clouds: {
        all:number;
    };
    dt:number;
    sys:{
        type:number;
        id:number;
        message:number;
        country:string;
        sunrise:number;
        sunset:number;
    };
    id:number;
    name:string;
    cod:number;
}
