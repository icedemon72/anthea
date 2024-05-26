import { Component, inject, Input, OnInit } from '@angular/core';
import { Classroom } from '../../../models/classroom';
import { ClassroomService } from '../../../services/classroom.service';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../../services/subject.service';

@Component({
  selector: 'app-classroom-edit',
  standalone: true,
  imports: [
		ReactiveFormsModule,
		CommonModule
	],
  templateUrl: './edit.component.html'
})


export class ClassroomEdit implements OnInit {
	@Input() id = '';
	classroom?: Classroom;
	subjects: any;
	isLoading?: boolean;

	updateForm = new FormGroup({
		name: new FormControl(''),
		subjectId: new FormControl('')
	}, Validators.required);

	private titleService = inject(Title);
	private classroomService = inject(ClassroomService);
	private subjectService = inject(SubjectService);

	ngOnInit() {
		this.isLoading = true;

		this.classroomService.show(parseInt(this.id)).subscribe((resp) => {
			this.classroom = resp.body;
			this.titleService.setTitle(`Uredi učionicu '${this.classroom?.name}' | Anthea`);
			this.updateForm.setValue({ name: resp.body.name,  subjectId: resp.body.subjectId })
		});

		this.subjectService.index().subscribe((resp) => {
			this.subjects = resp.body;
		});

		this.isLoading = false;
	}

	onSubmit() {
		const { name, subjectId } = this.updateForm.value;
		this.classroomService.update(this.classroom!.id.toString(), name!, parseInt(subjectId!)).subscribe();
	}
}
