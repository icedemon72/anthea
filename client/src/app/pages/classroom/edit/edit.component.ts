import { Component, inject, Input, OnInit } from '@angular/core';
import { Classroom } from '../../../models/classroom';
import { ClassroomService } from '../../../services/classroom.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html'
})
export class ClassroomEdit implements OnInit {
	@Input() id = '';
	classroom?: Classroom;
	isLoading?: boolean;

	private classroomService = inject(ClassroomService);

	ngOnInit() {
		this.isLoading = true;

		this.classroomService.show(parseInt(this.id)).subscribe((resp) => {
			this.classroom = resp;
			this.isLoading = false;
		});
	}
}
