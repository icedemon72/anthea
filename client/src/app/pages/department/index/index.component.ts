import { Component, inject, OnInit } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-department-index',
  standalone: true,
  imports: [
		CommonModule,
		NgIcon,
		RouterLink
	],
  templateUrl: './index.component.html'
})
export class DepartmentIndex implements OnInit {
	departments!: Department[];

	private departmentService = inject(DepartmentService);

	ngOnInit(): void {
		this.departmentService.index().subscribe({
			next: resp => {
				this.departments = resp.body as Department[];
			}
		});
	}

}
