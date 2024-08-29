import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { ClassroomService } from '../../../services/classroom.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from '../../../models/subject';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {ToastService} from "../../../services/toast.service";
import {ToastComponent} from "../../../components/toast/toast.component";

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
	private toastService = inject(ToastService);
	private router = inject(Router);
	private cd = inject(ChangeDetectorRef) // Add this

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

	showSuccessToast() {
		this.toastService.addToast('This is a success message!', 'success', 3000);
	}

	showErrorToast() {
		this.toastService.addToast('This is an error message!', 'error', 3000);
	}

	onSubmit() {
		const { name, subjectId } = this.storeForm.value;
		this.classroomService.store(name!, subjectId! as unknown as number).subscribe({
			next: resp => {
				this.showSuccessToast();
				setTimeout(() => { this.router.navigate(['classrooms', resp.body.id]) }, 2000);
			},

		});
	}
}
