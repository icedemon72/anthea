import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post';
import { CommonModule } from '@angular/common';
import { PostComponent as FilePostComponent }  from '../../file/post/post.component';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
		NgIcon,
		CommonModule,
		FilePostComponent,
	],
  templateUrl: './post.component.html'
})

export class PostComponent {
	@Input() post!: Post;
}
