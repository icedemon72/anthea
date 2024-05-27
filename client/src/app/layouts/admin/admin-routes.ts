import { Routes } from '@angular/router';
import { DepartmentCreate } from '../../pages/department/create/create.component';
import { SubjectCreate } from '../../pages/subject/create/create.component';
import { DepartmentEdit } from '../../pages/department/edit/edit.component';
import { SubjectEdit } from '../../pages/subject/edit/edit.component';

export const adminRoutes: Routes = [
	{ path: 'departments/create', component: DepartmentCreate, title: 'Novi odsek | Anthea'  },
	{ path: 'departments/:id/edit', component: DepartmentEdit },

	{ path: 'subjects/create', component: SubjectCreate, title: 'Novi predmet | Anthea' },
	{ path: 'subjects/:id/edit', component: SubjectEdit },
];

export class AdminLayoutRoutingModule {}
