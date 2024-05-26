import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-show',
  standalone: true,
  imports: [
		CommonModule
	],
  templateUrl: './show.component.html'
})

export class PostShow implements OnInit {
	@Input() classroom = '';
	@Input() id = '';
	post?: Post;

	private postService = inject(PostService);
	private titleService = inject(Title)

	ngOnInit(): void {
		this.postService.show(this.classroom, this.id).subscribe({
			next: resp => {
				this.post = resp.body;
				this.titleService.setTitle(`${resp.body.title} | Anthea`)
			}
		});
	}

}
