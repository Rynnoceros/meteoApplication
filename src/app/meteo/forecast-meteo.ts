import { Weather } from './weather';

export class ForecastMeteo {
    dt:number;
    main:{
        temp:number;
        temp_min:number;
        temp_max:number;
        pressure:number;
        sea_level:number;
        grnd_level:number;
        humidity:number;
        temp_kf:number;
    };
    weather:Weather;
    clouds:{
        all:number;
    };
    wind:{
        speed:number;
        deg:number;
    };
    rain:{
        '3h':number;
    };
    sys:{
        pod:string;
    };
    dt_txt:string;
}
