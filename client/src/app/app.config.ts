import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import {HttpClientModule} from "@angular/common/http";
import { routes } from './app.routes';
import {tokenInterceptor} from "./shared/token.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,  withComponentInputBinding()),
	  importProvidersFrom(HttpClientModule),
	  tokenInterceptor
  ]
};
