import { Component, inject, OnInit } from '@angular/core';
import { Classroom } from '../../../models/classroom';
import { ClassroomService } from '../../../services/classroom.service';
import { TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'app-classroom-index',
  standalone: true,
  imports: [
		TableComponent
	],
  templateUrl: './index.component.html'
})
export class ClassroomIndex implements OnInit {
	classrooms!: Classroom[];

	private classroomService = inject(ClassroomService);

	ngOnInit(): void {
		this.classroomService.index().subscribe({
			next: resp => {
				this.classrooms = resp.body as Classroom[];
			}
		});
	}
}
