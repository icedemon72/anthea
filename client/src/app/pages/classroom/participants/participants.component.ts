import { Component, inject, Input, OnInit } from '@angular/core';
import { ClassroomService } from '../../../services/classroom.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ToastService} from "../../../services/toast.service";

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [
		CommonModule
	],
  templateUrl: './participants.component.html'
})

export class ClassroomParticipants implements OnInit {
	@Input() id = '';
	students: any = [];
	professors: any = [];

	private classroomService = inject(ClassroomService);
	private router = inject(Router);
	private toastService = inject(ToastService);

	ngOnInit(): void {
		this.classroomService.show(parseInt(this.id), { participants: 1 }).subscribe({
			next: resp => {
				this.students = resp.body.students;
				this.professors = resp.body.professors;

			},
			error: (err: HttpErrorResponse) => {
				if (err.status === 404) {
					this.router.navigate(['**'], { skipLocationChange: true });
				}
			}
		});
	}

}
