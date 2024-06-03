import { Component, inject, OnInit } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ItemComponent } from '../sidebar/item/item.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { NavigationStart, Router } from '@angular/router';

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
export class SidebarAdminComponent implements OnInit {
	open: boolean = false;
	private authService = inject(AuthService);
	private router = inject(Router);

	ngOnInit(): void {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				this.open = false;
			}
		});
	}

	logout(): void {
		this.authService.logout().subscribe({
			next: () => this.router.navigateByUrl('/auth/login'),
			error: () =>  this.router.navigateByUrl('/auth/login')
		});
	}

	handleOpen(): void {
		this.open = !this.open;
	}

}
