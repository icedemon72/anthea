import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Department } from '../../../models/department';
import { Subject } from '../../../models/subject';
import { SubjectService } from '../../../services/subject.service';
import { DepartmentService } from '../../../services/department.service';
import { CommonModule } from '@angular/common';

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

	private subjectService = inject(SubjectService);
	private departmentService = inject(DepartmentService);

	ngOnInit(): void {
		this.isLoading = true;
		this.isSuccess = false;

		this.subjectService.show(this.id).subscribe((resp) => {
			const { name, semester, departmentId } = resp.body as Subject;

			this.updateForm.setValue({
				name, semester: semester.toString(), departmentId: departmentId.toString()
			});
			
			this.subject = resp.body;
		});

		this.departmentService.index().subscribe(resp => {
			this.departments = resp;
		});

		this.isSuccess = true;
		this.isLoading = false;

		

		
		
	}

	onSubmit(): void {
		const { name, semester, departmentId } = this.updateForm.value;

		this.subjectService.update(this.id, name!, parseInt(semester!), parseInt(departmentId!)).subscribe();
	}
}
