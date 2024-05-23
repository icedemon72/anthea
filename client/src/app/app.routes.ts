import {Routes} from '@angular/router';
import {setLayout} from "./layouts/page-layout.resolver";
import {PageLayout} from "./layouts/PageLayout";
import { authGuard, guestGuard } from './guards/auth.guard';

export const routes: Routes = [
	{
		path: 'auth',
		resolve: {
			layout: setLayout(PageLayout.Guest)
		},
		canActivate: [guestGuard],
		loadChildren: () => import('./layouts/guest/guest-routes')
			.then((m) => m.guestRoutes),
	},
	{
		path: '',
		resolve: {
			layout: setLayout(PageLayout.User)
		},
		canActivate: [authGuard],
		loadChildren: () => import('./layouts/user/user-routes')
			.then((m) => m.userRoutes),
	}
];
