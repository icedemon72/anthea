import { Component, inject, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { ClassroomService } from '../../../services/classroom.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from '../../../models/subject';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom-create',
  standalone: true,
  imports: [
		ReactiveFormsModule,
		CommonModule
	],
  templateUrl: './create.component.html'
})

export class ClassroomCreate implements OnInit {
	subjects: any;
	
	private subjectService = inject(SubjectService);
	private classroomService = inject(ClassroomService);
	private router = inject(Router);

	storeForm = new FormGroup({
		name: new FormControl(''),
		subjectId: new FormControl(''),
	}, Validators.required);

	ngOnInit() {
		
		this.subjectService.index().subscribe((resp) => {
			this.subjects = resp.body as Subject[];

			this.storeForm.patchValue({ subjectId: this.subjects[0].id });
		});
	}

	onSubmit() {
		const { name, subjectId } = this.storeForm.value;
		this.classroomService.store(name!, subjectId! as unknown as number).subscribe({
			next: resp => {
				setTimeout(() => { this.router.navigate(['classrooms', resp.body.id]) }, 2000);
			}
		});
	}
}
