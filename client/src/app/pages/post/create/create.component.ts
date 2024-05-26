import { Component, inject, Input, OnInit } from '@angular/core';
import { ClassroomService } from '../../../services/classroom.service';
import { PostService } from '../../../services/post.service';
import { Classroom } from '../../../models/classroom';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

	ngOnInit(): void {
		this.isLoading = true;

		this.classroomService.show(parseInt(this.classroom)).subscribe((resp) => {
			this.classroomData = resp.body;
			this.isLoading = false;
		});
	}

	onSubmit(): void {
		const { title, body, type } = this.storeForm.value;
		this.postService.store(this.classroom, title!, body!, type!).subscribe();
	}

}
