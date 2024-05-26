import { Component, inject } from '@angular/core';
import { DepartmentService } from '../../../services/department.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-department-create',
	standalone: true,
	imports: [
		ReactiveFormsModule,
	],
	templateUrl: './create.component.html'
})

export class DepartmentCreate {
	storeForm = new FormGroup({
		name: new FormControl(''),
		type: new FormControl('OAS'),
	}, Validators.required);

	private departmentService = inject(DepartmentService);
	
	onSubmit() {
		if (['OAS', 'MAS', 'DAS'].indexOf(this.storeForm.value.type!) !== -1) {
			this.departmentService.store(this.storeForm.value.name!, this.storeForm.value.type!).subscribe();
		}
	}

}
