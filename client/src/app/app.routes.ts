import {Routes} from '@angular/router';
import {setLayout} from "./layouts/page-layout.resolver";
import {PageLayout} from "./layouts/PageLayout";

export const routes: Routes = [
	{
		path: 'auth',
		resolve: {
			layout: setLayout(PageLayout.Guest)
		},
		loadChildren: () => import('./layouts/guest/guest-routes')
			.then((m) => m.guestRoutes),
	},
	{
		path: '',
		resolve: {
			layout: setLayout(PageLayout.User)
		},
		loadChildren: () => import('./layouts/user/user-routes')
			.then((m) => m.userRoutes),
	}
];
