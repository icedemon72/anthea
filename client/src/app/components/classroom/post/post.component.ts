import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
		CommonModule
	],
  templateUrl: './post.component.html'
})

export class PostComponent {
	@Input() post!: Post;
}
