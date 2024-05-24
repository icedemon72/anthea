import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClassroomService } from '../../../services/classroom.service';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
		ReactiveFormsModule
	],
  templateUrl: './join.component.html'
})
export class ClassroomJoin {
	private classroomService = inject(ClassroomService);

	joinForm = new FormGroup({
		code: new FormControl(''),
	}, Validators.required);

	onSubmit() {
		this.classroomService.join(this.joinForm.value.code!).subscribe();
	}
}
