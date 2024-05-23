import { Component, inject } from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {ItemComponent} from "./item/item.component";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token.service';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [
		NgIcon,
		ItemComponent
	],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
	private router = inject(Router);
	private authService = inject(AuthService);

	logout() {
		this.authService.logout().subscribe({
			next: () => this.router.navigateByUrl('/auth/login'),
			error: () =>  this.router.navigateByUrl('/auth/login')
		});
	}

	refreshTest() {
		this.authService.protected().subscribe();
	}
}
