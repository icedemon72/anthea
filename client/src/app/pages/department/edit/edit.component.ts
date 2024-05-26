import { Component, inject, Input, OnInit } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

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
	
	updateForm = new FormGroup({
		name: new FormControl(''),
		type: new FormControl(''),
	}, Validators.required);

	private titleService = inject(Title);
	private departmentService = inject(DepartmentService);

	ngOnInit(): void {
		this.isLoading = true;
		this.isSuccess = true;

		this.departmentService.show(parseInt(this.id)).subscribe((resp) => {
			const { name, type } = resp.body as Department;

			this.updateForm.setValue({
				name, type
			});

			this.department = resp;
			this.titleService.setTitle(`Uredi odsek '${name}' | Anthea`);
			this.isSuccess = true;

			this.updateForm.setValue({
				name, type
			});

		});

		this.isLoading = false;
	}


	onSubmit() {
		if (['OAS', 'MAS', 'DAS'].indexOf(this.updateForm.value.type!) !== -1) {
			this.departmentService.update(parseInt(this.id), this.updateForm.value.name!, this.updateForm.value.type!).subscribe();
		}
	}
}
