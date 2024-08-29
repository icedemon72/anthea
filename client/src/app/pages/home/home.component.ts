import { Component, inject, OnInit } from '@angular/core';
import { Classroom } from '../../models/classroom';
import { ClassroomService } from '../../services/classroom.service';
import {ToastComponent} from "../../components/toast/toast.component";
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		CommonModule,
		NgIcon,
		RouterLink,
		ToastComponent
	],
	templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
	studentClassrooms: Classroom[] = [];
	professorClassrooms: Classroom[] = [];
	superProfClassrooms: Classroom[] = [];

	private classroomService = inject(ClassroomService);

	ngOnInit(): void {
		this.classroomService.joined({ all: true }).subscribe({
			next: (resp) => {
				resp.body.forEach((classroom: Classroom) => {
					classroom.role === 'S'
						? this.studentClassrooms.push(classroom)
						: classroom.role === 'P'
							? this.professorClassrooms.push(classroom)
							: this.superProfClassrooms.push(classroom);
				});
			}
		});
	}

}
