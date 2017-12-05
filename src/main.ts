import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
import { MeteoModule } from './app/meteo/meteo.module';
import { environment } from './environments/environment';
// import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
platformBrowserDynamic().bootstrapModule(MeteoModule)
.catch(err => console.log(err));
