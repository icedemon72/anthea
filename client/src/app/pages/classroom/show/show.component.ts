import { Component, inject, Input, OnInit } from '@angular/core';
import { Classroom } from '../../../models/classroom';
import { ClassroomService } from '../../../services/classroom.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [],
  templateUrl: './show.component.html'
})
export class ClassroomShow implements OnInit {
	@Input() id = '';
	classroom?: Classroom;
	isLoading?: boolean;

	private classroomService = inject(ClassroomService);

	ngOnInit() {
		this.isLoading = true;
		console.log(this.id);
		this.classroomService.show(parseInt(this.id)).subscribe((resp) => {
			this.classroom = resp;
			this.isLoading = false;
		});
	}
}
