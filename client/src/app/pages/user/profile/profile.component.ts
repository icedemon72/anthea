import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
	isLoading?: boolean;
	user?: User;

	private userService = inject(UserService);

	ngOnInit(): void {
		this.isLoading = true;
		this.userService.profile().subscribe((resp) => {
			this.user = resp.body;
			this.isLoading = false;
		});
	}
}
