import { Component, inject, Input, OnInit } from '@angular/core';
import { ClassroomService } from '../../../services/classroom.service';
import { PostService } from '../../../services/post.service';
import { Classroom } from '../../../models/classroom';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [
		ReactiveFormsModule
	],
  templateUrl: './create.component.html'
})

export class PostCreate implements OnInit {
	@Input() classroom = '';
	isLoading?: boolean;
	classroomData?: Classroom;

	storeForm = new FormGroup({
		title: new FormControl(''),
		body: new FormControl(''),
		type: new FormControl('file')
	});

	private postService = inject(PostService);
	private classroomService = inject(ClassroomService);
	private router = inject(Router);

	ngOnInit(): void {
		this.isLoading = true;

		this.classroomService.show(parseInt(this.classroom)).subscribe({
			next: (resp) => {
				this.classroomData = resp.body;
				this.isLoading = false;
			},
			error: (err: HttpErrorResponse) => {
				if(err.status === 404 || err.status === 403) {
					this.router.navigate(['**'], { skipLocationChange: true });
				}
			}
		});
	}

	onSubmit(): void {
		const { title, body, type } = this.storeForm.value;
		this.postService.store(this.classroom, title!, body!, type!).subscribe({
			next: resp => {
				this.router.navigate([`/classrooms/${this.classroom}/posts/${resp.body.id}`])
			}
		});
	}

}
