import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {ToastService} from "../../../services/toast.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
})

export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private toastService = inject(ToastService);

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  }, Validators.required);

  onSubmit() {
    this.authService.register(this.registerForm.value.name!, this.registerForm.value.email!, this.registerForm.value.password!).subscribe(
      data => {
		        this.toastService.addToast('Uspešna registracija');
				this.router.navigateByUrl('auth/login');
			},
	    error => {
			this.toastService.addToast('Greška pri registraciji', 'error');
	    }
    );
  }
}
