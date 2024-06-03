import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-professor-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html'
})
export class ProfessorIndex implements OnInit {
	professors: any;

	private userService = inject(UserService);

	ngOnInit(): void {
		this.userService.professorIndex().subscribe({
			next: resp => {
				this.professors = resp.body;
			}
		})
	}

}
