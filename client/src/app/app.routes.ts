import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {RegisterComponent} from "./pages/auth/register/register.component";

export const routes: Routes = [
	{path: '', component: AppComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
];
