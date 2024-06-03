import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Classroom } from '../../../models/classroom';
import { ClassroomService } from '../../../services/classroom.service';
import { Title } from '@angular/platform-browser';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PostComponent } from '../../../components/classroom/post/post.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-classroom-show',
  standalone: true,
  imports: [
		CommonModule,
		PostComponent
	],
  templateUrl: './show.component.html'
})
export class ClassroomShow implements OnInit, OnDestroy {
	@Input() id = '';
	classroom!: Classroom;
	posts?: Post[];

	private route = inject(ActivatedRoute);
	private router = inject(Router);
	private titleService = inject(Title);
	private classroomService = inject(ClassroomService);
	private postService = inject(PostService);
	
	private routeSubscription!: Subscription;

	ngOnInit(): void {
		this.routeSubscription = this.route.params.subscribe((param: any) => {
			this.id = param.id;
			this.fetchClassrooms();
		});
	}

	fetchClassrooms(): void {
		this.classroomService.show(parseInt(this.id)).subscribe({
			next: (resp) => {
				this.classroom = resp.body;
				this.titleService.setTitle(`${resp.body.name} | Anthea`)
	
				// Get all the posts in the classroom
				this.postService.index(resp.body.id).subscribe({
					next: resp => {
						this.posts = resp.body as Post[];
					}
				});
				
			},

			error: (err: HttpErrorResponse) => {
				if (err.status === 404) {
					this.router.navigate(['**'], { skipLocationChange: true });
				}
			}
		});
	}

	ngOnDestroy() { this.routeSubscription.unsubscribe(); }
}

