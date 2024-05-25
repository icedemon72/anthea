import { Component, inject, Input, OnInit } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-department-edit',
  standalone: true,
  imports: [
		ReactiveFormsModule,
	],
  templateUrl: './edit.component.html'
})
export class DepartmentEdit implements OnInit {
	@Input() id = '';
	department?: Department;
	isLoading?: boolean;
	isSuccess?: boolean;

	private departmentService = inject(DepartmentService);

	ngOnInit(): void {
		this.isLoading = true;
		this.isSuccess = true;

		this.departmentService.show(parseInt(this.id)).subscribe((resp) => {
			const { name, type } = resp as Department;

			this.updateForm.setValue({
				name, type
			});

			this.department = resp;
			this.isSuccess = true;
		});

		this.isLoading = false;
	}

	updateForm = new FormGroup({
		name: new FormControl(''),
		type: new FormControl(''),
	}, Validators.required);

	onSubmit() {
		if (['OAS', 'MAS', 'DAS'].indexOf(this.updateForm.value.type!) !== -1) {
			this.departmentService.update(parseInt(this.id), this.updateForm.value.name!, this.updateForm.value.type!).subscribe();
		}
	}
}
