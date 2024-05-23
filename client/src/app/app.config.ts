import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import {HttpClientModule} from "@angular/common/http";
import { userRoutes } from './routes/user-routes';
import { guestRoutes } from './routes/guest-routes';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
	  // provideRouter(userRoutes),
    // provideRouter(guestRoutes),
	  importProvidersFrom(HttpClientModule),
  ]
};
