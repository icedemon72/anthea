import { Routes } from '@angular/router';
import { LoginComponent } from '../../pages/auth/login/login.component';
import { RegisterComponent } from '../../pages/auth/register/register.component';

export const guestRoutes: Routes = [
	{ path: 'login', component: LoginComponent, title: 'Prijava | Anthea' },
	{ path: 'register', component: RegisterComponent, title: 'Registracija | Anthea' },
];

export class GuestLayoutRoutingModule {}
