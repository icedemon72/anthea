import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { DepartmentCreate } from '../../pages/department/create/create.component';
import { SubjectCreate } from '../../pages/subject/create/create.component';
import { ClassroomCreate } from '../../pages/classroom/create/create.component';
import { ClassroomJoin } from '../../pages/classroom/join/join.component';
import { ClassroomEdit } from '../../pages/classroom/edit/edit.component';
import { ClassroomShow } from '../../pages/classroom/show/show.component';
import { DepartmentEdit } from '../../pages/department/edit/edit.component';
import { SubjectEdit } from '../../pages/subject/edit/edit.component';

export const userRoutes: Routes = [
	{ path: 'departments/create', component: DepartmentCreate },
	{ path: 'departments/:id/edit', component: DepartmentEdit},

	{ path: 'subjects/create', component: SubjectCreate },
	{ path: 'subjects/:id/edit', component: SubjectEdit },
	
	{ path: 'classrooms/create', component: ClassroomCreate },
	{ path: 'classrooms/join', component: ClassroomJoin },
	{ path: 'classrooms/:id', component: ClassroomShow },
	{ path: 'classrooms/:id/edit', component: ClassroomEdit },

	{ path: '', component: HomeComponent },
];


export class UserLayoutRoutingModule {}
