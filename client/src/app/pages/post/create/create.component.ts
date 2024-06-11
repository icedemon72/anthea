import { Component, inject, Input, OnInit } from '@angular/core';
import { ClassroomService } from '../../../services/classroom.service';
import { PostService } from '../../../services/post.service';
import { Classroom } from '../../../models/classroom';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { NgIcon } from '@ng-icons/core';
import { DecimalPipe, NgStyle } from '@angular/common';
import { UploadComponent } from '../../../components/file/upload/upload.component';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [
		ReactiveFormsModule,
		NgIcon,
		DecimalPipe,
		NgStyle,
		UploadComponent
	],
  templateUrl: './create.component.html'
})

export class PostCreate implements OnInit {
	@Input() classroom = '';
	isLoading?: boolean;
	classroomData?: Classroom;
	selectedFiles: any = [];
	uploadInProgress: boolean = false;
	progress: number = 0;

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
			this.selectedFiles.push(file);
		}
  }

	deleteFile = (index: number): void => {
		if(index < this.selectedFiles.length) {
			this.selectedFiles.splice(index, 1);
		}
	}

	onSubmit(): void {
		const { title, body, type } = this.storeForm.value;
		
		if(type !== 'text') {
			const formData = new FormData();
			formData.append('title', title!);
			formData.append('body', body!);
			formData.append('type', type!);
			
			for (let i = 0; i < this.selectedFiles.length!; i++) {
				formData.append(`files[]`, this.selectedFiles[i]);
			}
	
			this.uploadInProgress = true;
			this.postService.storeUpload(this.classroom, formData).pipe(  
				map(event => {  
					switch (event.type) {  
						case HttpEventType.UploadProgress:  
							this.progress = Math.round(event.loaded * 100 / event.total);  
							break;  
						case HttpEventType.Response:  
							return event;  
					}  
				}),  
				catchError((error: HttpErrorResponse) => {  
					this.uploadInProgress = false;
					return of(`Upload failed.`);  
				})).subscribe((event: any) => {  
					if (typeof (event) === 'object') {  
						this.router.navigate([`/classrooms/${this.classroom}/posts/${event.body.id}`])
					}  
				});
		}
		else {
			this.postService.store(this.classroom, title!, body!, type!).subscribe({
				next: resp => {
					this.router.navigate([`/classrooms/${this.classroom}/posts/${resp.body.id}`])
				}
			});
		}
	}

}
