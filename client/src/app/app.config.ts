import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import {HttpClientModule} from "@angular/common/http";
import { userRoutes } from './layouts/user/user-routes';
import { guestRoutes } from './layouts/guest/guest-routes';
import { routes } from './app.routes';
import {tokenInterceptor} from "./shared/token.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
	  importProvidersFrom(HttpClientModule),
	  tokenInterceptor
  ]
};
