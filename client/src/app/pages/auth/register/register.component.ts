import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  }, Validators.required);

  onSubmit() {
    this.authService.register(this.registerForm.value.name!, this.registerForm.value.email!, this.registerForm.value.password!).subscribe();
  }
}
