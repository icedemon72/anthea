import {Component, inject} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
	imports: [
		RouterLink,
		ReactiveFormsModule,
	],
  templateUrl: './login.component.html',
})

export class LoginComponent {
	private authService = inject(AuthService);

	loginForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	}, Validators.required);


	onSubmit() {
		this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe();
	}

}
