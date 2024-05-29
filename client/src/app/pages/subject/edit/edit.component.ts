import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Department } from '../../../models/department';
import { Subject } from '../../../models/subject';
import { SubjectService } from '../../../services/subject.service';
import { DepartmentService } from '../../../services/department.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-edit',
  standalone: true,
  imports: [
		ReactiveFormsModule,
		CommonModule
	],
  templateUrl: './edit.component.html'
})
export class SubjectEdit implements OnInit {
	@Input() id = '';
	
	isLoading?: boolean;
	isSuccess?: boolean;
	departments?: Department[];
	subject?: Subject;

	updateForm = new FormGroup({
		name: new FormControl(''),
		semester: new FormControl(''),
		departmentId: new FormControl(''),
	}, Validators.required);

	private router = inject(Router);
	private subjectService = inject(SubjectService);
	private departmentService = inject(DepartmentService);

	ngOnInit(): void {
		this.isLoading = true;
		this.isSuccess = false;

		this.subjectService.show(this.id).subscribe({
			next: (resp) => {
				const { name, semester, departmentId } = resp.body;
	
				this.subject = resp.body;
	
				this.updateForm.setValue({
					name, semester, departmentId
				});
	
			},
			error: (err: HttpErrorResponse) => {
				if(err.status === 404 || err.status === 403) {
					this.router.navigate(['**'], { skipLocationChange: true });
				}
			}
		});

		this.departmentService.index().subscribe(resp => {
			this.departments = resp.body;
		});


		this.isSuccess = true;
		this.isLoading = false;

	}

	onSubmit(): void {
		const { name, semester, departmentId } = this.updateForm.value;

		this.subjectService.update(this.id, name!, parseInt(semester!), parseInt(departmentId!)).subscribe();
	}
}
