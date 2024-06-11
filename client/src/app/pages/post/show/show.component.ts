import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PostComponent } from '../../../components/file/post/post.component';

@Component({
  selector: 'app-post-show',
  standalone: true,
  imports: [
		CommonModule,
		PostComponent
	],
  templateUrl: './show.component.html'
})

export class PostShow implements OnInit {
	@Input() classroom = '';
	@Input() id = '';
	post!: Post;

	private router = inject(Router);
	private postService = inject(PostService);
	private titleService = inject(Title);

	ngOnInit(): void {
		this.postService.show(this.classroom, this.id).subscribe({
			next: resp => {
				this.post = resp.body;
				this.titleService.setTitle(`${resp.body.title} | Anthea`);
			},
			error: err => {
				if(err.status === 404 || err.status === 403) {
					this.router.navigate(['**'], { skipLocationChange: true });
				}
			}
		});
	}

}
