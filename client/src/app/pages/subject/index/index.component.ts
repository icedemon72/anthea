import { Component, inject, OnInit } from '@angular/core';
import { Subject } from '../../../models/subject';
import { SubjectService } from '../../../services/subject.service';
import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';
import { TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'app-subject-index',
  standalone: true,
  imports: [
		RouterLink,
		NgIcon,
		TableComponent
	],
  templateUrl: './index.component.html'
})
export class SubjectIndex implements OnInit {
	subjects!: Subject[];

	private subjectService = inject(SubjectService);

	ngOnInit(): void {
		this.subjectService.index().subscribe({
			next: resp => {
				this.subjects = resp.body as Subject[];
			}
		});
	}
	
}
