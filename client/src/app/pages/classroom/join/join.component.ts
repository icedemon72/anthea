import { Component, inject } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClassroomService } from '../../../services/classroom.service';
import { CodeInputModule } from 'angular-code-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom-join',
  standalone: true,
  imports: [
		// ReactiveFormsModule,
		CodeInputModule,
	],
  templateUrl: './join.component.html'
})
export class ClassroomJoin {
	isLoading: boolean = false;
	isSuccess: boolean = false;
	errorMsg?: any;
	isError: boolean = false;

	private classroomService = inject(ClassroomService);
	private router = inject(Router);
	// joinForm = new FormGroup({
	// 	code: new FormControl(''),
	// }, Validators.required);

	onCodeCompleted(code: string) {
		this.isLoading = true;
		

		this.classroomService.join(code).subscribe({
			next: (resp) => {
				this.isError = false;
				this.isSuccess = true;
				
				setTimeout(() => {
					this.router.navigate(['classrooms', resp.body.id]);
				}, 2000)
			},
			error: (err) => {
				this.isError = true;
				this.errorMsg = err.error.message; 
			},
			complete: () => {
				this.isLoading = false;
			}
		});
  }

	checkIfEmpty(code: string) {
		if(code.length === 0) {
			this.isError = false;
		}
	}

}
