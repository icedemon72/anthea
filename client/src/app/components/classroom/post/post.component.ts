import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html'
})

export class PostComponent {
	@Input() post?: Post;
}
