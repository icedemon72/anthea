import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../layouts/user/user.component';
import { HomeComponent } from '../pages/home/home.component';

export const userRoutes: Routes = [ 
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: HomeComponent }
    ],
  },
];


export class UserLayoutRoutingModule {}