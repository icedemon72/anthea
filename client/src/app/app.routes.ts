import { Routes } from '@angular/router';
import { GuestComponent } from './layouts/guest/guest.component';
import { UserComponent } from './layouts/user/user.component';

export const routes: Routes = [
	{
		path: 'auth',
		component: GuestComponent,
	},
	{
		path: '',
		component: UserComponent,
	},
];
