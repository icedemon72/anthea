import { Component, inject, Input, OnInit } from '@angular/core';
import { Classroom } from '../../../models/classroom';
import { ClassroomService } from '../../../services/classroom.service';
import { Title } from '@angular/platform-browser';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom-show',
  standalone: true,
  imports: [
		CommonModule
	],
  templateUrl: './show.component.html'
})
export class ClassroomShow implements OnInit {
	@Input() id = '';
	classroom?: Classroom;
	posts?: Post[];
	isLoading?: boolean;
	isSuccess: boolean = false;

	private router = inject(Router);
	private titleService = inject(Title);
	private classroomService = inject(ClassroomService);
	private postService = inject(PostService);

	ngOnInit(): void {
		this.isLoading = true;
		this.classroomService.show(parseInt(this.id)).subscribe({
			next: (resp) => {
				this.classroom = resp.body;
				this.titleService.setTitle(`${resp.body.name} | Anthea`)
	
				// Get all the posts in the classroom
				this.postService.index(resp.body.id).subscribe({
					next: resp => {
						this.posts = resp.body as Post[];
						this.isSuccess = true;
					}
				});
				
				this.isLoading = false;
			},

			error: (err: HttpErrorResponse) => {
				if (err.status === 404) {
					this.router.navigate(['**'], { skipLocationChange: true });
				}
			}
		});
	}
}
