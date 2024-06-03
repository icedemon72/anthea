import { Component, inject, Input, OnInit } from '@angular/core';
import { ClassroomService } from '../../../services/classroom.service';
import { PostService } from '../../../services/post.service';
import { Classroom } from '../../../models/classroom';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import isEqual from 'lodash.isequal';
import { NgIcon } from '@ng-icons/core';
import { DecimalPipe } from '@angular/common';
import { UploadComponent } from '../../../components/file/upload/upload.component';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [
		ReactiveFormsModule,
		NgIcon,
		DecimalPipe,
		UploadComponent
	],
  templateUrl: './create.component.html'
})

export class PostCreate implements OnInit {
	@Input() classroom = '';
	isLoading?: boolean;
	classroomData?: Classroom;
	selectedFiles: any = [];

	storeForm = new FormGroup({
		title: new FormControl(''),
		body: new FormControl(''),
		type: new FormControl('text'),
		files: new FormControl(new Array<File>)
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

	onFileSelected(event: any): void {
		for(let i = 0; i < event.target.files.length; i++) {
			let file = event.target.files[i];

			let alreadyIn: boolean = false;
			
			for(let j = 0; j < this.selectedFiles.length; j++) {

				if(isEqual(this.selectedFiles[j], file)) {
					alreadyIn = true;
					break;
				}
			}

			if(!alreadyIn) {
				this.selectedFiles.push(file);
			}

			this.storeForm.patchValue({ files: this.selectedFiles });
		}
  }

	deleteFile = (index: number): void => {
		if(index < this.selectedFiles.length) {
			this.selectedFiles.splice(index, 1);
		}
	}

	onSubmit(): void {
		const { title, body, type, files } = this.storeForm.value;
		// const formData: any = this.storeForm.value;
	
		this.postService.store(this.classroom, title!, body!, type!, files).subscribe({
			next: resp => {
				this.router.navigate([`/classrooms/${this.classroom}/posts/${resp.body.id}`])
			}
		});
	}

}
