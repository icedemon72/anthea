import { Component, inject, OnInit } from '@angular/core';
import { ClassroomService } from '../../../services/classroom.service';
import { Classroom } from '../../../models/classroom';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-classrooms-bar',
  standalone: true,
  imports: [
		CommonModule,
		ItemComponent
	],
  templateUrl: './classrooms-bar.component.html'
})
export class ClassroomsBarComponent implements OnInit {
	studentClassrooms: Classroom[] = [];
	professorClassrooms: Classroom[] = [];
	private classroomService = inject(ClassroomService);

	ngOnInit(): void {
		this.classroomService.joined().subscribe({
			next: (resp) => {
				resp.body.forEach((classroom: Classroom) => {
					classroom.role === 'S' 
						? this.studentClassrooms.push(classroom)
						: this.professorClassrooms.push(classroom)
				});
			}
		});
	}

}
