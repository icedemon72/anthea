import { Component, inject, Input, OnInit } from '@angular/core';
import { Classroom } from '../../../models/classroom';
import { ClassroomService } from '../../../services/classroom.service';
import { Title } from '@angular/platform-browser';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post';
import { CommonModule } from '@angular/common';

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

	private titleService = inject(Title);
	private classroomService = inject(ClassroomService);
	private postService = inject(PostService);

	ngOnInit(): void {
		this.isLoading = true;
		this.classroomService.show(parseInt(this.id)).subscribe((resp) => {
			this.classroom = resp.body;
			this.titleService.setTitle(`${resp.body.name} | Anthea`)

			this.postService.index(resp.body.id).subscribe({
				next: resp => {
					this.posts = resp.body as Post[];
				}
			});
			
			this.isLoading = false;
		});
	}
}
