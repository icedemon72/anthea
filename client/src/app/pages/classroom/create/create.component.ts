import { Component, inject, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { ClassroomService } from '../../../services/classroom.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from '../../../models/subject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
		ReactiveFormsModule,
		CommonModule
	],
  templateUrl: './create.component.html'
})

export class ClassroomCreate implements OnInit {
	subjects: any;
	isLoading!: boolean;

	private subjectService = inject(SubjectService);
	private classroomService = inject(ClassroomService);

	storeForm = new FormGroup({
		name: new FormControl(''),
		subjectId: new FormControl(''),
	}, Validators.required);

	ngOnInit() {
		this.isLoading = true;
		this.subjectService.index().subscribe((resp) => {
			this.subjects = resp.body as Subject[];
			this.isLoading = false;
		});
	}

	onSubmit() {
		const { name, subjectId } = this.storeForm.value;
		this.classroomService.store(name!, subjectId! as unknown as number).subscribe();
	}
}
