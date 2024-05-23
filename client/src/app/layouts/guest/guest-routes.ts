import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest.component';
import { LoginComponent } from '../../pages/auth/login/login.component';
import { RegisterComponent } from '../../pages/auth/register/register.component';

export const guestRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
];

export class GuestLayoutRoutingModule {}
