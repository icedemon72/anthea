import { Component, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ItemComponent } from '../sidebar/item/item.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  standalone: true,
  imports: [
		NgIcon,
		ItemComponent,
		CommonModule
	],
  templateUrl: './sidebar-admin.component.html'
})
export class SidebarAdminComponent {
	private authService = inject(AuthService);
	private router = inject(Router);

	logout(): void {
		this.authService.logout().subscribe({
			next: () => this.router.navigateByUrl('/auth/login'),
			error: () =>  this.router.navigateByUrl('/auth/login')
		});
	}

}
