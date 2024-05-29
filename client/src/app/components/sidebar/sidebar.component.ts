import { Component, inject, OnInit } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { ItemComponent } from "./item/item.component";
import { AuthService } from '../../services/auth.service';
import { NavigationStart, Router } from '@angular/router';
import { TokenStorageService } from '../../services/token.service';
import { CommonModule } from '@angular/common';
import { ClassroomsBarComponent } from './classrooms-bar/classrooms-bar.component';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [
		NgIcon,
		ItemComponent,
		ClassroomsBarComponent,
		CommonModule
	],
	templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
	isClassroomOpen: boolean = false;

	private router = inject(Router);
	private authService = inject(AuthService);
	private tokenService = inject(TokenStorageService);
	private roles = this.tokenService.getRoles();

	student: boolean = this.roles?.includes('student') as boolean;
	professor: boolean = this.roles?.includes('professor') as boolean;
	admin: boolean = this.roles?.includes('admin') as boolean;

	ngOnInit(): void {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				this.isClassroomOpen = false;
			}
		})

	}

	handleClassroomOpen() {
		this.isClassroomOpen = !this.isClassroomOpen;
	}

	logout() {
		this.authService.logout().subscribe({
			next: () => this.router.navigateByUrl('/auth/login'),
			error: () => this.router.navigateByUrl('/auth/login')
		});
	}

	refreshTest() {
		this.authService.protected().subscribe();
	}
}

