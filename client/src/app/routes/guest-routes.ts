import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from '../layouts/guest/guest.component';
import { LoginComponent } from '../pages/auth/login/login.component';
import { RegisterComponent } from '../pages/auth/register/register.component';

export const guestRoutes: Routes = [ 
  {
    path: '',
    component: GuestComponent,
    children: [
      // { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

export class GuestLayoutRoutingModule {}