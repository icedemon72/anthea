import { Routes } from '@angular/router';
import { DepartmentCreate } from '../../pages/department/create/create.component';
import { SubjectCreate } from '../../pages/subject/create/create.component';
import { DepartmentEdit } from '../../pages/department/edit/edit.component';
import { SubjectEdit } from '../../pages/subject/edit/edit.component';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { DepartmentIndex } from '../../pages/department/index/index.component';
import { ClassroomIndex } from '../../pages/classroom/index/index.component';
import { SubjectIndex } from '../../pages/subject/index/index.component';
import { ProfessorIndex } from '../../pages/admin/professors/index/index.component';

export const adminRoutes: Routes = [
	{ path: 'departments/create', component: DepartmentCreate, title: 'Novi odsek | Anthea'  },
	{ path: 'departments/:id/edit', component: DepartmentEdit },
	{ path: 'departments', component: DepartmentIndex, title: 'Odseci | Anthea' },
	
	{ path: 'subjects', component: SubjectIndex, title: 'Predmeti | Anthea' },
	{ path: 'subjects/create', component: SubjectCreate, title: 'Novi predmet | Anthea' },
	{ path: 'subjects/:id/edit', component: SubjectEdit },

	{ path: 'classrooms', component: ClassroomIndex, title: 'Učionice | Anthea' },

	{ path: 'professors', component: ProfessorIndex, title: 'Profesori | Anthea' },

	{ path: '', component: DashboardComponent, title: 'Admin panel | Anthea' }
];

export class AdminLayoutRoutingModule {}
