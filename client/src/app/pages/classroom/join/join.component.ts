import { Component, inject } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClassroomService } from '../../../services/classroom.service';
import { CodeInputModule } from 'angular-code-input';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
		// ReactiveFormsModule,
		CodeInputModule,
	],
  templateUrl: './join.component.html'
})
export class ClassroomJoin {
	private classroomService = inject(ClassroomService);

	// joinForm = new FormGroup({
	// 	code: new FormControl(''),
	// }, Validators.required);

	onCodeCompleted(code: string) {
		this.classroomService.join(code).subscribe();
  }



}
