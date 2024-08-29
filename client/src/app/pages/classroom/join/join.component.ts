import { Component, inject } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClassroomService } from '../../../services/classroom.service';
import { CodeInputModule } from 'angular-code-input';
import { Router } from '@angular/router';
import {ToastService} from "../../../services/toast.service";

@Component({
	selector: 'app-classroom-join',
	standalone: true,
	imports: [
		// ReactiveFormsModule,
		CodeInputModule
	],
	templateUrl: './join.component.html',
	styleUrl: './join.component.css'
})
export class ClassroomJoin {
	errorMsg?: any;
	isSuccess: boolean = false;
	isError: boolean = false;

	private classroomService = inject(ClassroomService);
	private router = inject(Router);
	private toastService = inject(ToastService);
	// joinForm = new FormGroup({
	// 	code: new FormControl(''),
	// }, Validators.required);

	onCodeCompleted(code: string) {
		this.classroomService.join(code).subscribe({
			next: (resp) => {
				this.isError = false;
				this.isSuccess = true;
				this.toastService.addToast('Uspešno ste se učlanili!');
				setTimeout(() => {
					this.router.navigate(['classrooms', resp.body.id]);
				}, 2000)
			},
			error: (err) => {
				this.isError = true;
				this.errorMsg = err.error.message;
				this.toastService.addToast(err.error.message, 'error');
			},
		});
	}

	checkIfEmpty(code: string) {
		if (code.length === 0) {
			this.isError = false;
		}
	}

}
