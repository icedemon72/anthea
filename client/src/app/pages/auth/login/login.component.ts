import {Component, inject} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { catchError, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
	imports: [
		RouterLink,
		ReactiveFormsModule,
		CommonModule
	],
  templateUrl: './login.component.html',
})

export class LoginComponent {
	isError?: boolean;
	error?: any;
	fieldErrors?: any;

	private authService = inject(AuthService);
	private router = inject(Router);

	loginForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	}, Validators.required);


	onSubmit() {
		this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!)
		.subscribe({
			next: (data) => {
				this.router.navigateByUrl('');
			},
			error: (err) => {
				this.isError = true;
				this.error = err?.message;
				this.fieldErrors = err?.error?.errors;
				console.log(this.fieldErrors);
			}
		});
	}

}
