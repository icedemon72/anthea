import { Component, inject, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { DepartmentService } from '../../../services/department.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Department } from '../../../models/department';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-create',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
	],
	templateUrl: './create.component.html'
})

export class SubjectCreate implements OnInit {
	departments: any;
	isLoading!: boolean;

	private subjectService = inject(SubjectService);
	private departmentService = inject(DepartmentService);

	storeForm = new FormGroup({
		name: new FormControl(''),
		semester: new FormControl(''),
		departmentId: new FormControl(''),
	}, Validators.required);

	ngOnInit(): void {
		this.isLoading = true;

		this.departmentService.index().subscribe((resp) => {
			this.departments = resp.body as Department[];
		});
	}

	onSubmit() {
		const { name, semester, departmentId } = this.storeForm.value;
		this.subjectService.store(name!, semester! as unknown as number, departmentId! as unknown as number).subscribe();
	}
}
