import {Routes} from '@angular/router';
import {setLayout} from "./layouts/page-layout.resolver";
import {PageLayout} from "./layouts/PageLayout";
import { authGuard, guestGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RoleGuard } from './guards/role.guard';

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
		path: 'admin',
		resolve: {
			layout: setLayout(PageLayout.Admin)
		},
		loadChildren: () => import('./layouts/admin/admin-routes')
			.then((m) => m.adminRoutes),
		canActivate: [ RoleGuard ],
		data: { roles: ['admin'] },
	},
	{
		path: '',
		resolve: {
			layout: setLayout(PageLayout.User)
		},
		canActivate: [authGuard],
		loadChildren: () => import('./layouts/user/user-routes')
			.then((m) => m.userRoutes),
	},
	{
		path: '**',
		resolve: {
			layout: setLayout(PageLayout.Guest)
		},
		title: '(404) Stranica ne postoji | Anthea',
		component: PageNotFoundComponent
	}
];
