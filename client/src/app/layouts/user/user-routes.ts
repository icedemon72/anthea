import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from '../../pages/home/home.component';

export const userRoutes: Routes = [
	{ path: '', component: HomeComponent }
];


export class UserLayoutRoutingModule {}
