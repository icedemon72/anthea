import { Component, inject, Input, OnInit } from '@angular/core';
import { Classroom } from '../../../models/classroom';
import { ClassroomService } from '../../../services/classroom.service';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../../services/subject.service';
import { Router } from '@angular/router';
import {ToastService} from "../../../services/toast.service";

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

	updateForm = new FormGroup({
		name: new FormControl(''),
		subjectId: new FormControl('')
	}, Validators.required);

	private titleService = inject(Title);
	private classroomService = inject(ClassroomService);
	private subjectService = inject(SubjectService);
	private router = inject(Router);
	private toastService = inject(ToastService);

	ngOnInit() {
		this.classroomService.show(parseInt(this.id)).subscribe({
			next: (resp) => {
				this.classroom = resp.body;
				this.titleService.setTitle(`Uredi učionicu '${this.classroom?.name}' | Anthea`);
				this.updateForm.setValue({ name: resp.body.name,  subjectId: resp.body.subjectId })

				this.subjectService.index().subscribe((resp) => {
					this.subjects = resp.body;
				});
			},
			error: err => {
				if (err.status === 404 || err.status === 403) {
					this.router.navigate(['**'], { skipLocationChange: true });
				}
			}
		});
	}

	onSubmit() {
		const { name, subjectId } = this.updateForm.value;
		this.classroomService.update(this.classroom!.id.toString(), name!, parseInt(subjectId!)).subscribe({
			next: data => {
				this.toastService.addToast(data.body.message);
			},
			error: err => {
				this.toastService.addToast('Greška prilikom uređivanja', 'error');
			}
		});
	}
}
